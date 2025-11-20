// Cloudflare Pages Function - 上传接口

interface Env {
  TRANSFERS: KVNamespace;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const { request, env } = context;
    const formData = await request.formData();
    
    const code = formData.get('code') as string;
    const type = formData.get('type') as string; // 'file' 或 'text'
    const content = formData.get('content') as string;
    const fileName = formData.get('fileName') as string | null;
    
    // 验证参数
    if (!code || !type || !content) {
      return new Response(JSON.stringify({ error: '缺少必要参数' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // 验证分享码格式（6位数字或字母）
    if (!/^[A-Z0-9]{6}$/.test(code)) {
      return new Response(JSON.stringify({ error: '分享码必须是6位数字或大写字母' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // 验证内容大小
    const sizeInBytes = new Blob([content]).size;
    const maxSize = 25 * 1024 * 1024; // 最大25MB
    
    // 检查是否超过限制（25MB）
    if (sizeInBytes > maxSize) {
      return new Response(JSON.stringify({ error: '内容大小超过25MB限制' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // 检查分享码是否已存在
    const existing = await env.TRANSFERS.get(code);
    if (existing) {
      return new Response(JSON.stringify({ error: '该分享码已被使用，请更换' }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // 提取 contentType（从 base64 数据中）
    let contentType = 'application/octet-stream';
    if (type === 'file' && content.startsWith('data:')) {
      const match = content.match(/^data:([^;]+);/);
      if (match) {
        contentType = match[1];
      }
    } else if (type === 'text') {
      contentType = 'text/plain';
    }
    
    // 构造存储数据
    const data = {
      type,
      content,
      contentType,
      fileName: fileName || null,
      uploadTime: Date.now(),
      downloaded: false,
      downloadTime: null
    };
    
    // 写入文件数据
    await env.TRANSFERS.put(code, JSON.stringify(data), {
      expirationTtl: 3600 // 1小时
    });
    
    return new Response(JSON.stringify({ 
      success: true, 
      code,
      message: '上传成功'
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    
  } catch (error: any) {
    return new Response(JSON.stringify({ 
      error: '服务器错误: ' + error.message 
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

