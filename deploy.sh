#!/bin/bash
# F2F 快速部署脚本

# 设置代理
export https_proxy=http://127.0.0.1:7897 
export http_proxy=http://127.0.0.1:7897 
export all_proxy=socks5://127.0.0.1:7897

# 压缩 HTML
echo "正在压缩 index.html..."
npx html-minifier-terser \
  --collapse-whitespace \
  --remove-comments \
  --remove-redundant-attributes \
  --remove-empty-attributes \
  --minify-css true \
  --minify-js true \
  public/index.html -o public/index.min.html

# 备份原文件并替换
cp public/index.html public/index.dev.html
mv public/index.min.html public/index.html

echo "压缩完成!"
ORIGINAL_SIZE=$(wc -c < public/index.dev.html)
MINIFIED_SIZE=$(wc -c < public/index.html)
echo "原始大小: ${ORIGINAL_SIZE} bytes"
echo "压缩后: ${MINIFIED_SIZE} bytes"

# 部署到 Production 分支
wrangler pages deploy public --project-name f2f-transfer --branch f2f-transfer

# 部署完成后恢复原始文件
mv public/index.dev.html public/index.html
echo "已恢复原始 index.html"

