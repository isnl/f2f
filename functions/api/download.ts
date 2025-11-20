// Cloudflare Pages Function - 下载接口

interface Env {
  TRANSFERS: KVNamespace;
}

export async function onRequestGet(context: { request: Request; env: Env }) {
  try {
    const { request, env } = context;
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    
    if (!code) {
      return new Response(JSON.stringify({ error: '缺少分享码' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // 从 KV 获取数据
    const dataStr = await env.TRANSFERS.get(code);
    
    if (!dataStr) {
      return new Response(JSON.stringify({ error: '分享码不存在或已过期' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const data = JSON.parse(dataStr);
    
    // 标记为已下载，并设置下载时间
    if (!data.downloaded) {
      data.downloaded = true;
      data.downloadTime = Date.now();
      
      // 更新 KV，设置 1 分钟后过期（下载后延迟删除）
      await env.TRANSFERS.put(code, JSON.stringify(data), {
        expirationTtl: 60 // 1分钟后自动删除
      });
    }
    
    // 返回数据
    return new Response(JSON.stringify({
      success: true,
      type: data.type,
      content: data.content,
      contentType: data.contentType || 'application/octet-stream',
      fileName: data.fileName
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
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}

