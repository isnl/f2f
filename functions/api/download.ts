// Cloudflare Pages Function - 下载接口

import { getTranslator } from './i18n';

interface Env {
  TRANSFERS: KVNamespace;
}

interface FileEntry {
  name: string;
  size: number;
  type: string;
  offset: number;
  length: number;
}

interface TransferMetadata {
  type: 'text' | 'file' | 'files' | 'images';
  contentType: string;
  fileName: string | null;
  fileEntries: FileEntry[] | null;
  uploadTime: number;
  downloaded: boolean;
  downloadTime: number | null;
}

// 从打包的 ArrayBuffer 中解析出元数据和二进制数据
// 格式：[4字节: 元数据JSON长度][元数据JSON字节][文件二进制数据]
function unpackData(packed: ArrayBuffer): { metadata: TransferMetadata; binaryData: Uint8Array } {
  const view = new DataView(packed);
  const metadataLength = view.getUint32(0);
  const headerSize = 4;

  const metadataBytes = new Uint8Array(packed, headerSize, metadataLength);
  const metadataJson = new TextDecoder().decode(metadataBytes);
  const metadata = JSON.parse(metadataJson) as TransferMetadata;

  const binaryStart = headerSize + metadataLength;
  const binaryData = new Uint8Array(packed.slice(binaryStart));

  return { metadata, binaryData };
}

// 重新打包数据（用于更新下载状态后回写 KV）
function repackData(metadata: TransferMetadata, binaryData: Uint8Array): ArrayBuffer {
  const metadataJson = JSON.stringify(metadata);
  const metadataBytes = new TextEncoder().encode(metadataJson);
  const headerSize = 4;

  const totalSize = headerSize + metadataBytes.byteLength + binaryData.byteLength;
  const result = new Uint8Array(totalSize);

  const view = new DataView(result.buffer);
  view.setUint32(0, metadataBytes.byteLength);
  result.set(metadataBytes, headerSize);
  result.set(binaryData, headerSize + metadataBytes.byteLength);

  return result.buffer;
}

export async function onRequestGet(context: { request: Request; env: Env }) {
  try {
    const { request, env } = context;
    const t = getTranslator(request);
    const url = new URL(request.url);
    const code = url.searchParams.get('code');

    if (!code) {
      return new Response(JSON.stringify({ error: t('missingCode') }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const fileIndex = url.searchParams.get('fileIndex');

    // 先尝试从 KV metadata 判断是否是文本类型
    const { value: rawValue, metadata: kvMeta } = await env.TRANSFERS.getWithMetadata<TransferMetadata>(code, { type: 'arrayBuffer' });

    if (!rawValue) {
      return new Response(JSON.stringify({ error: t('codeNotFound') }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 文本类型：使用 KV metadata，值是纯文本字符串
    if (kvMeta && kvMeta.type === 'text') {
      const content = new TextDecoder().decode(rawValue as ArrayBuffer);

      // 标记为已下载
      if (!kvMeta.downloaded) {
        kvMeta.downloaded = true;
        kvMeta.downloadTime = Date.now();
        await env.TRANSFERS.put(code, content, {
          expirationTtl: 60,
          metadata: kvMeta
        });
      }

      return new Response(JSON.stringify({
        success: true,
        type: 'text',
        content,
        contentType: 'text/plain',
        fileName: null
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // 二进制类型：从打包的数据中解析
    const { metadata, binaryData } = unpackData(rawValue as ArrayBuffer);

    // 标记已下载的辅助函数
    async function markDownloaded() {
      if (!metadata.downloaded) {
        metadata.downloaded = true;
        metadata.downloadTime = Date.now();
        const repacked = repackData(metadata, binaryData);
        await env.TRANSFERS.put(code!, repacked, {
          expirationTtl: 60
        });
      }
    }

    if (fileIndex !== null) {
      // 请求下载特定文件（多文件场景的单个文件下载）
      const idx = parseInt(fileIndex, 10);
      if (!metadata.fileEntries || isNaN(idx) || idx < 0 || idx >= metadata.fileEntries.length) {
        return new Response(JSON.stringify({ error: 'Invalid file index' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      const entry = metadata.fileEntries[idx];
      const fileData = binaryData.slice(entry.offset, entry.offset + entry.length);

      return new Response(fileData.buffer as ArrayBuffer, {
        status: 200,
        headers: {
          'Content-Type': entry.type || 'application/octet-stream',
          'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(entry.name)}`,
          'Content-Length': String(entry.length),
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Expose-Headers': 'Content-Disposition'
        }
      });
    }

    if (metadata.type === 'file') {
      // 单文件：直接返回二进制流
      await markDownloaded();

      return new Response(binaryData.buffer as ArrayBuffer, {
        status: 200,
        headers: {
          'Content-Type': metadata.contentType || 'application/octet-stream',
          'Content-Disposition': metadata.fileName
            ? `attachment; filename*=UTF-8''${encodeURIComponent(metadata.fileName)}`
            : 'attachment',
          'Content-Length': String(binaryData.byteLength),
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Expose-Headers': 'X-Transfer-Type, X-File-Name, Content-Disposition',
          'X-Transfer-Type': 'file',
          'X-File-Name': encodeURIComponent(metadata.fileName || 'download')
        }
      });
    }

    if (metadata.type === 'files' || metadata.type === 'images') {
      // 多文件/多图片：返回元数据 JSON，前端通过 fileIndex 逐个下载
      await markDownloaded();

      const fileEntries = (metadata.fileEntries || []).map(entry => ({
        name: entry.name,
        size: entry.size,
        type: entry.type
      }));

      return new Response(JSON.stringify({
        success: true,
        type: metadata.type,
        contentType: 'application/json',
        fileName: null,
        files: fileEntries
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // 未知类型
    return new Response(JSON.stringify({ error: t('codeNotFound') }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    const t = getTranslator(context.request);
    return new Response(JSON.stringify({
      error: t('serverError') + error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// CORS 预检
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
