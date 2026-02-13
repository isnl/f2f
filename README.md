<div align="center">

# 🚀 F2F.icu

**Simple, Fast, and Secure Peer-to-Peer File Transfer Tool**

English | [简体中文](./README_ZH.md) | [日本語](./README_JA.md) | [한국어](./README_KO.md) | [Français](./README_FR.md) | [Español](./README_ES.md) | [Deutsch](./README_DE.md)

[![GitHub stars](https://img.shields.io/github/stars/isnl/f2f?style=flat-square&logo=github)](https://github.com/isnl/f2f/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/isnl/f2f?style=flat-square&logo=github)](https://github.com/isnl/f2f/network)
[![GitHub issues](https://img.shields.io/github/issues/isnl/f2f?style=flat-square&logo=github)](https://github.com/isnl/f2f/issues)
[![GitHub license](https://img.shields.io/github/license/isnl/f2f?style=flat-square)](https://github.com/isnl/f2f/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/isnl/f2f/pulls)

[![Deploy with Cloudflare Pages](https://img.shields.io/badge/Deploy%20with-Cloudflare%20Pages-F38020?style=flat-square&logo=cloudflare)](https://pages.cloudflare.com/)
[![Powered by Workers](https://img.shields.io/badge/Powered%20by-Cloudflare%20Workers-F38020?style=flat-square&logo=cloudflare)](https://workers.cloudflare.com/)

[🌐 Live Demo](https://f2f.icu) | [📖 Documentation](https://github.com/isnl/f2f) | [🐛 Report Issues](https://github.com/isnl/f2f/issues) | [💡 Feature Requests](https://github.com/isnl/f2f/issues/new)

</div>

---

## ✨ Features

<table>
  <tr>
    <td align="center">🚀</td>
    <td><b>Lightning Fast</b><br/>Powered by Cloudflare's global edge network with millisecond response times</td>
    <td align="center">🔐</td>
    <td><b>6-Digit Share Code</b><br/>Simple and memorable, with 2.18 billion combinations for security</td>
  </tr>
  <tr>
    <td align="center">📦</td>
    <td><b>Large File Support</b><br/>Single file up to 25MB, perfect for everyday needs</td>
    <td align="center">📝</td>
    <td><b>Multiple Formats</b><br/>Support for files, text, images, and various content types</td>
  </tr>
  <tr>
    <td align="center">📚</td>
    <td><b>Batch Upload</b><br/>Support multiple files (up to 100) and images (up to 25) at once</td>
    <td align="center">📦</td>
    <td><b>ZIP Download</b><br/>Download multiple files/images as a single ZIP package</td>
  </tr>
  <tr>
    <td align="center">⏱️</td>
    <td><b>Auto-Deletion</b><br/>Automatically deleted 1 minute after download to protect privacy</td>
    <td align="center">🆓</td>
    <td><b>Completely Free</b><br/>Based on Cloudflare's free tier, no credit card required</td>
  </tr>
  <tr>
    <td align="center">🎨</td>
    <td><b>Beautiful Interface</b><br/>Modern UI design with exceptional user experience</td>
    <td align="center">📱</td>
    <td><b>Responsive Design</b><br/>Perfect support for mobile, tablet, and desktop</td>
  </tr>
</table>

## 🎯 Live Demo

👉 **Visit: [https://f2f.icu](https://f2f.icu)**

<div align="center">
  <img src="https://img.shields.io/badge/Demo-Available-success?style=for-the-badge" alt="Demo Available"/>
</div>

## 📸 Preview

<details>
<summary>Click to view interface screenshots</summary>

### Send Interface
![Send Interface](./docs/imgs/send.png)

### Receive Interface
![Receive Interface](./docs/imgs/receive.png)

</details>

## 🛠️ Technology Stack

<div align="center">

| Technology | Description |
|------------|-------------|
| ⚡️ **Cloudflare Pages** | Frontend static website hosting with global CDN acceleration |
| 🔥 **Cloudflare Workers** | Serverless backend API with edge computing |
| 💾 **Cloudflare KV** | Key-value storage with native TTL support |
| 🎨 **Tailwind CSS** | Modern CSS framework for rapid UI development |
| 📝 **TypeScript** | Type-safe JavaScript superset |

</div>

## 🚀 Quick Start

### Prerequisites

- ✅ Node.js 16+
- ✅ Cloudflare account (free tier is sufficient)
- ✅ Git

### One-Click Deploy

#### Method 1: Fork and Deploy (Recommended)

1. **Fork this repository**

   Click the `Fork` button in the top right

2. **Connect to Cloudflare Pages**

   - Login to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Go to `Workers & Pages` → `Create application` → `Pages` → `Connect to Git`
   - Select your forked repository
   - Build configuration:
     - **Build command**: Leave blank (or `npm run build`)
     - **Output directory**: `public`
   - Click `Save and Deploy`

3. **Configure KV Storage**

   - In Dashboard, go to `Workers & Pages` → `KV`
   - Click `Create a namespace`, name it `f2f-transfers`
   - Go back to your Pages project → `Settings` → `Functions` → `KV namespace bindings`
   - Add binding:
     - **Variable name**: `TRANSFERS`
     - **KV namespace**: Select `f2f-transfers`
   - Save and redeploy

4. **Done! 🎉**

   Visit the domain provided by Cloudflare

#### Method 2: Local Development

```bash
# Clone repository
git clone https://github.com/isnl/f2f.git
cd f2f

# Install dependencies
npm install

# Create KV namespace
wrangler kv:namespace create "TRANSFERS"

# Configure wrangler.toml
# Add the generated namespace ID to wrangler.toml

# Start local development server
npm run dev

# Visit http://localhost:8788
```

### Configuration File

Edit `wrangler.toml`:

```toml
name = "f2f-transfer"
compatibility_date = "2025-11-20"

pages_build_output_dir = "public"

[[kv_namespaces]]
binding = "TRANSFERS"
id = "your_kv_namespace_id_here"          # Replace with your production KV ID
preview_id = "your_preview_kv_id_here"    # Replace with your preview KV ID
```

## 📖 Usage Guide

### 📤 Send Files/Text

1. Switch to **Send** tab
2. Enter or generate a 6-digit share code (supports uppercase letters A-Z and numbers 0-9)
3. Select content type:
   - **File**: Click to upload or drag and drop (supports multiple files, up to 100, total ≤25MB)
   - **Text**: Enter text content directly
   - **Image**: Select image or Ctrl/Cmd + V to paste screenshot (supports multiple images, up to 25)
4. Click **Create Share**
5. Copy the share code or link and send to recipient

### 📥 Receive Files/Text

1. Switch to **Receive** tab
2. Enter 6-digit pickup code
3. Click **Get Content**
4. Download options:
   - **Single file**: Auto-download
   - **Multiple files/images**: Choose to download individually or as a ZIP package
   - **Text/Image**: Direct preview display
5. ⚠️ Content will be **automatically deleted after 1 minute**, please save promptly

## ⚙️ How It Works

```mermaid
graph LR
    A[Sender Upload] --> B[Convert to Base64]
    B --> C[Store in KV]
    C --> D[Generate Share Code]
    D --> E[Receiver Enters Code]
    E --> F[Read from KV]
    F --> G[Mark as Downloaded]
    G --> H[Set 1 Minute TTL]
    H --> I[Auto Delete]
```

### Data Flow

1. **Upload Phase**
   - File → Base64 encoding → Store in KV
   - Default TTL: 1 hour (auto-delete after 1 hour if not downloaded)

2. **Download Phase**
   - Verify share code → Read data
   - Mark as downloaded → Update TTL to 1 minute
   - Auto-trigger browser download (files) or display (text/images)

3. **Cleanup Phase**
   - KV automatically deletes expired data based on TTL
   - Zero maintenance cost

### Why Choose KV Storage?

| Feature | KV Storage | R2 Object Storage | D1 Database |
|---------|------------|-------------------|-------------|
| Single value size | **25MB** ✅ | 5GB | 1MB (needs sharding) |
| TTL support | **Native** ✅ | ❌ Manual implementation | ❌ Manual implementation |
| Read/write latency | **Very low** ✅ | Low | Lower |
| Free tier | **100K reads/day** ✅ | Requires credit card | 10 databases |
| Use case | **Temporary file storage** ✅ | Large file storage | Structured data |

## 🔒 Security

| Item | Description |
|------|-------------|
| 🔢 **Code Strength** | 6 characters (A-Z, 0-9), ~2.18 billion combinations |
| ⏰ **Data Retention** | Not downloaded: 1 hour / Downloaded: 1 minute |
| ⚠️ **Privacy Notice** | Not recommended for sensitive information (passwords, IDs, etc.) |
| 🔐 **Transfer Security** | Full HTTPS encryption |

## 📊 Limitations

- **File Size**: Maximum 25MB total
- **File Count**: Up to 100 files or 25 images per transfer
- **Share Code Format**: 6-digit uppercase letters or numbers (A-Z, 0-9)
- **Data Retention**:
  - Not downloaded: Auto-delete after 1 hour
  - Downloaded: Auto-delete after 1 minute
- **KV Free Tier**:
  - 100,000 reads per day
  - 1,000 writes per day
  - Sufficient for personal use

## 📝 API Documentation

### POST `/api/upload`

Upload file or text

**Request Parameters (FormData):**

```typescript
{
  code: string,       // 6-digit share code (required)
  type: 'file' | 'text' | 'files' | 'images',  // Content type (required)
  content: string,    // Content (required)
                      // - file: Base64 encoded file content
                      // - text: Plain text content
                      // - files: JSON array [{dataUrl, name, size, type}, ...]
                      // - images: JSON array [{dataUrl, name}, ...]
  fileName?: string   // File name (required when type=file)
}
```

**Response:**

```typescript
{
  success: true,
  code: string,       // Share code
  message: string     // Status message
}
```

### GET `/api/download`

Download file or get text

**Request Parameters:**

```
?code=ABC123  // 6-digit pickup code
```

**Response:**

```typescript
{
  success: true,
  type: 'file' | 'text' | 'files' | 'images',
  content: string,      // Base64, text, or JSON array
  contentType: string,  // MIME type
  fileName?: string     // File name (returned when type=file)
}
```

## 🎨 Customization

### Modify File Size Limit

Edit `functions/api/upload.ts`:

```typescript
const maxSize = 25 * 1024 * 1024; // Modify to your desired size (bytes)
```

### Modify Data Retention Time

**Upload TTL** (not downloaded):

```typescript
// functions/api/upload.ts
expirationTtl: 3600 // 1 hour = 3600 seconds, customizable
```

**Download TTL** (downloaded):

```typescript
// functions/api/download.ts
expirationTtl: 60 // 1 minute = 60 seconds, customizable
```

## 🚀 Performance Optimization

### Frontend Optimization

- ✅ Tailwind CSS on-demand loading
- ✅ Lazy loading icons (Lucide Icons)
- ✅ Responsive image preview
- ✅ Debouncing and throttling

### Backend Optimization

- ✅ Edge computing (Cloudflare Workers)
- ✅ Global CDN acceleration
- ✅ Low-latency KV storage

### Recommendations

1. Enable Cloudflare's Brotli compression
2. Configure custom domain with HTTPS
3. Enable Cloudflare Analytics to monitor traffic
4. Use Cloudflare Workers Analytics to monitor API performance

## 🤝 Contributing

We welcome all forms of contributions! 🎉

### How to Contribute

1. **Fork this repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to branch** (`git push origin feature/AmazingFeature`)
5. **Submit Pull Request**

### Types of Contributions

- 🐛 Report bugs
- 💡 Suggest new features
- 📖 Improve documentation
- 🎨 Optimize UI/UX
- ⚡️ Performance optimization
- 🌍 Multi-language support

### Development Guidelines

- Follow TypeScript conventions
- Keep code clean and readable
- Add necessary comments
- Test features before submitting

## 🌟 Acknowledgments

Thanks to the following technologies and projects:

- [Cloudflare Pages](https://pages.cloudflare.com/) - Static website hosting
- [Cloudflare Workers](https://workers.cloudflare.com/) - Serverless computing platform
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide Icons](https://lucide.dev/) - Open source icon library

## 📄 License

This project is licensed under the [MIT](LICENSE) License - see the LICENSE file for details

## 💬 Contact

- 🐛 **Report Issues**: [GitHub Issues](https://github.com/isnl/f2f/issues)
- 💡 **Feature Suggestions**: [GitHub Discussions](https://github.com/isnl/f2f/discussions)
- 📧 **Email Contact**: [Via GitHub](https://github.com/isnl)

## ❓ FAQ

<details>
<summary><b>Why not use R2 object storage?</b></summary>

R2 object storage requires credit card binding, while KV storage is completely free and ready to use. For temporary file transfers under 25MB, KV storage is sufficient with lower latency.
</details>

<details>
<summary><b>How to modify file size limit?</b></summary>

Modify the `maxSize` constant in `functions/api/upload.ts`. Note:
- KV single value maximum is 25MB
- Files over 25MB require R2 object storage
- Larger files take longer to upload/download
</details>

<details>
<summary><b>Is data really secure?</b></summary>

- ✅ All data stored on Cloudflare edge nodes with physical security
- ✅ Full HTTPS encrypted transfer
- ✅ Auto-deletion mechanism protects privacy
- ⚠️ Small probability of 6-digit code being guessed
- ⚠️ Not recommended for highly sensitive information (passwords, private keys, etc.)
</details>

<details>
<summary><b>Why 1-minute deletion after download instead of immediate?</b></summary>

Provides error tolerance time for users:
- Avoids download failures due to network latency
- Allows users to re-download once
- 1-minute auto-deletion balances convenience and security

You can customize this time in the code.
</details>

<details>
<summary><b>Is the free tier sufficient?</b></summary>

More than enough for personal use:
- **KV Reads**: 100,000 per day
- **KV Writes**: 1,000 per day
- **Workers Requests**: 100,000 per day

For teams or high-frequency use, you may need to upgrade to a paid plan.
</details>

<details>
<summary><b>Can I self-host?</b></summary>

Absolutely! This project is open source, you can:
1. Fork this repository
2. Deploy to your own Cloudflare account
3. Customize domain and configuration
4. Have full control over data and service
</details>

<details>
<summary><b>Does it support batch upload?</b></summary>

✅ **Yes!** The current version supports batch upload:
- **Multiple files**: Up to 100 files, total size not exceeding 25MB
- **Multiple images**: Up to 25 images, total size not exceeding 25MB
- **Download options**: Download individually or as a single ZIP package
</details>

<details>
<summary><b>How to view usage statistics?</b></summary>

In Cloudflare Dashboard you can view:
- **Workers Analytics**: API call count, response time, etc.
- **KV Metrics**: Read/write count, storage usage, etc.
- **Pages Analytics**: Traffic, geographic distribution, etc.
</details>

---


## ⭐ Star History

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=isnl/f2f&type=Date)](https://star-history.com/#isnl/f2f&Date)

</div>

---

<div align="center">

### 🌟 If this project helps you, please give it a Star!

**Made with ❤️ by [isnl](https://github.com/isnl)**

[⬆ Back to Top](#-f2ficu)

</div>
