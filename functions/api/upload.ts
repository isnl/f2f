// Cloudflare Pages Function - 上传接口

import { getTranslator } from './i18n';

interface Env {
  TRANSFERS: KVNamespace;
}

interface FileEntry {
  name: string;
  size: number;
  type: string;
  offset: number; // 在二进制数据中的偏移位置
  length: number; // 二进制数据长度
}

interface TransferMetadata {
  type: 'text' | 'file' | 'files' | 'images';
  contentType: string;
  fileName: string | null;
  fileEntries: FileEntry[] | null; // 多文件时的文件列表信息
  uploadTime: number;
  downloaded: boolean;
  downloadTime: number | null;
}

// 将元数据和二进制数据打包为一个 ArrayBuffer
// 格式：[4字节: 元数据JSON长度][元数据JSON字节][文件二进制数据]
function packData(metadata: TransferMetadata, binaryData: Uint8Array): ArrayBuffer {
  const metadataJson = JSON.stringify(metadata);
  const metadataBytes = new TextEncoder().encode(metadataJson);
  const headerSize = 4; // 4字节存储元数据长度

  const totalSize = headerSize + metadataBytes.byteLength + binaryData.byteLength;
  const result = new Uint8Array(totalSize);

  // 写入元数据长度（大端序 4 字节）
  const view = new DataView(result.buffer);
  view.setUint32(0, metadataBytes.byteLength);

  // 写入元数据 JSON
  result.set(metadataBytes, headerSize);

  // 写入二进制数据
  result.set(binaryData, headerSize + metadataBytes.byteLength);

  return result.buffer;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const { request, env } = context;
    const t = getTranslator(request);
    const formData = await request.formData();

    const code = formData.get('code') as string;
    const type = formData.get('type') as string;

    // 验证参数
    if (!code || !type) {
      return new Response(JSON.stringify({ error: t('missingParams') }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 验证分享码格式（6位数字或字母）
    if (!/^[A-Z0-9]{6}$/.test(code)) {
      return new Response(JSON.stringify({ error: t('invalidShareCode') }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 检查分享码是否已存在
    const existing = await env.TRANSFERS.get(code, { type: 'arrayBuffer' });
    if (existing) {
      return new Response(JSON.stringify({ error: t('codeAlreadyUsed') }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const maxSize = 25 * 1024 * 1024; // 最大25MB

    if (type === 'text') {
      // 文本类型：直接存为 string，元数据放 KV metadata（文本元数据很小，不超过 1024 字节）
      const content = formData.get('content') as string;
      if (!content) {
        return new Response(JSON.stringify({ error: t('missingParams') }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      const sizeInBytes = new Blob([content]).size;
      if (sizeInBytes > maxSize) {
        return new Response(JSON.stringify({ error: t('contentTooLarge') }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      const metadata: TransferMetadata = {
        type: 'text',
        contentType: 'text/plain',
        fileName: null,
        fileEntries: null,
        uploadTime: Date.now(),
        downloaded: false,
        downloadTime: null
      };

      await env.TRANSFERS.put(code, content, {
        expirationTtl: 3600,
        metadata
      });
    } else {
      // 二进制类型：file / files / images
      const files: File[] = [];
      const fileNames: string[] = [];
      const fileTypes: string[] = [];

      const formFiles = formData.getAll('files');
      for (const f of formFiles) {
        if (f instanceof File) {
          files.push(f);
          fileNames.push(f.name);
          fileTypes.push(f.type || 'application/octet-stream');
        }
      }

      if (files.length === 0) {
        return new Response(JSON.stringify({ error: t('missingParams') }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // 读取所有文件为 ArrayBuffer
      const buffers: ArrayBuffer[] = [];
      let totalBinarySize = 0;

      for (const file of files) {
        const buffer = await file.arrayBuffer();
        buffers.push(buffer);
        totalBinarySize += buffer.byteLength;
      }

      if (totalBinarySize > maxSize) {
        return new Response(JSON.stringify({ error: t('contentTooLarge') }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // 构造文件条目列表
      const fileEntries: FileEntry[] = [];
      let offset = 0;
      for (let i = 0; i < files.length; i++) {
        fileEntries.push({
          name: fileNames[i],
          size: buffers[i].byteLength,
          type: fileTypes[i],
          offset,
          length: buffers[i].byteLength
        });
        offset += buffers[i].byteLength;
      }

      // 合并所有文件二进制数据
      const merged = new Uint8Array(totalBinarySize);
      let pos = 0;
      for (const buf of buffers) {
        merged.set(new Uint8Array(buf), pos);
        pos += buf.byteLength;
      }

      const actualType = type as 'file' | 'files' | 'images';
      const contentType = files.length === 1 ? (fileTypes[0] || 'application/octet-stream') : 'application/octet-stream';

      const metadata: TransferMetadata = {
        type: actualType,
        contentType,
        fileName: files.length === 1 ? fileNames[0] : null,
        fileEntries,
        uploadTime: Date.now(),
        downloaded: false,
        downloadTime: null
      };

      // 将元数据和二进制数据打包存入 KV
      const packed = packData(metadata, merged);

      await env.TRANSFERS.put(code, packed, {
        expirationTtl: 3600
      });
    }

    return new Response(JSON.stringify({
      success: true,
      code,
      message: t('uploadSuccess')
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
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
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
