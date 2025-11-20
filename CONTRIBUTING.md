# 贡献指南

感谢你考虑为 F2F.icu 做出贡献！🎉

我们欢迎各种形式的贡献，无论是报告 bug、提出新功能建议、改进文档，还是提交代码。

## 📋 目录

- [行为准则](#行为准则)
- [如何贡献](#如何贡献)
  - [报告 Bug](#报告-bug)
  - [提出功能建议](#提出功能建议)
  - [提交代码](#提交代码)
- [开发指南](#开发指南)
  - [环境搭建](#环境搭建)
  - [代码规范](#代码规范)
  - [提交规范](#提交规范)
- [Pull Request 流程](#pull-request-流程)

## 行为准则

### 我们的承诺

为了营造开放和友好的环境，我们作为贡献者和维护者承诺：无论年龄、体型、残疾、民族、性别认同和表达、经验水平、国籍、个人形象、种族、宗教或性取向如何，参与我们项目和社区的每个人都不会受到骚扰。

### 我们的标准

有助于创建积极环境的行为示例：

- ✅ 使用友好和包容的语言
- ✅ 尊重不同的观点和经验
- ✅ 优雅地接受建设性批评
- ✅ 关注对社区最有利的事情
- ✅ 对其他社区成员表示同情

不可接受的行为示例：

- ❌ 使用性化语言或图像，以及不受欢迎的性关注或挑逗
- ❌ 捣乱、侮辱/贬损评论以及人身或政治攻击
- ❌ 公开或私下骚扰
- ❌ 未经明确许可，发布他人的私人信息
- ❌ 其他在专业环境中可合理认为不适当的行为

## 如何贡献

### 报告 Bug

发现 bug？请帮助我们改进！

**提交 Bug 报告前，请先：**

1. 检查 [现有 Issues](https://github.com/isnl/f2f/issues)，确保问题未被报告
2. 确认问题可以复现
3. 收集相关信息（浏览器版本、操作系统、错误截图等）

**如何提交 Bug 报告：**

1. 前往 [Issues 页面](https://github.com/isnl/f2f/issues/new)
2. 选择 "Bug Report" 模板
3. 填写以下信息：
   - **标题**：简明扼要地描述问题
   - **问题描述**：详细描述遇到的问题
   - **复现步骤**：如何重现这个问题
   - **期望行为**：你期望看到什么
   - **实际行为**：实际发生了什么
   - **环境信息**：
     - 操作系统：macOS / Windows / Linux
     - 浏览器：Chrome / Safari / Firefox 及版本
     - 项目版本：v1.0.0
   - **截图**：如果可能，附上截图
   - **附加信息**：其他有用的信息

### 提出功能建议

有好的想法？我们很乐意听取！

**如何提交功能建议：**

1. 前往 [Issues 页面](https://github.com/isnl/f2f/issues/new)
2. 选择 "Feature Request" 模板
3. 填写以下信息：
   - **标题**：简明扼要地描述功能
   - **问题描述**：这个功能解决了什么问题？
   - **建议方案**：你希望如何实现这个功能？
   - **替代方案**：是否考虑过其他方案？
   - **使用场景**：什么情况下会用到这个功能？
   - **附加信息**：其他有用的信息或截图

### 提交代码

想要贡献代码？太棒了！

**开始之前：**

1. 确保有相关的 Issue（如果没有，请先创建）
2. 在 Issue 中说明你想要处理这个问题
3. 等待维护者确认，避免重复工作

## 开发指南

### 环境搭建

**1. Fork 并克隆仓库**

```bash
# Fork 仓库后，克隆到本地
git clone https://github.com/YOUR_USERNAME/f2f.git
cd f2f

# 添加上游仓库
git remote add upstream https://github.com/isnl/f2f.git
```

**2. 安装依赖**

```bash
npm install
```

**3. 配置 Cloudflare**

```bash
# 安装 Wrangler CLI（如果还没有）
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 创建 KV 命名空间
wrangler kv:namespace create "TRANSFERS"
wrangler kv:namespace create "TRANSFERS" --preview

# 将生成的 ID 填入 wrangler.toml
```

**4. 启动开发服务器**

```bash
npm run dev
```

访问 `http://localhost:8788`

### 代码规范

**TypeScript 规范**

```typescript
// ✅ 好的示例
interface User {
  name: string;
  age: number;
}

async function fetchUser(id: string): Promise<User> {
  // 实现...
}

// ❌ 不好的示例
function fetchUser(id) {  // 缺少类型注解
  // 实现...
}
```

**命名规范**

- **文件名**：kebab-case（如 `upload-handler.ts`）
- **变量/函数**：camelCase（如 `getUserData`）
- **类/接口**：PascalCase（如 `UserData`）
- **常量**：UPPER_SNAKE_CASE（如 `MAX_FILE_SIZE`）

**代码风格**

- 使用 2 空格缩进
- 使用单引号 `'` 而非双引号 `"`（除非必要）
- 每行最多 100 字符
- 函数和类之间空一行
- 添加必要的注释，解释复杂逻辑

**注释规范**

```typescript
// ✅ 好的注释：解释为什么
// 使用 Base64 编码以便在 KV 中存储二进制数据
const encoded = btoa(fileContent);

// ❌ 不好的注释：只说明做了什么
// 将文件内容转换为 Base64
const encoded = btoa(fileContent);
```

### 提交规范

我们遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范。

**提交消息格式**

```
<type>(<scope>): <subject>

<body>

<footer>
```

**类型（Type）**

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式调整（不影响功能）
- `refactor`: 重构（既不是新功能也不是修复）
- `perf`: 性能优化
- `test`: 添加测试
- `chore`: 构建过程或辅助工具的变动

**示例**

```bash
# 新功能
git commit -m "feat(upload): 添加批量上传支持"

# Bug 修复
git commit -m "fix(download): 修复大文件下载失败的问题"

# 文档更新
git commit -m "docs(readme): 更新部署说明"

# 代码重构
git commit -m "refactor(api): 简化上传接口逻辑"
```

## Pull Request 流程

### 1. 创建分支

```bash
# 从最新的 main 分支创建新分支
git checkout main
git pull upstream main
git checkout -b feature/your-feature-name
```

**分支命名规范：**

- `feature/xxx` - 新功能
- `fix/xxx` - Bug 修复
- `docs/xxx` - 文档更新
- `refactor/xxx` - 代码重构

### 2. 开发和提交

```bash
# 进行开发
# ...

# 提交代码（遵循提交规范）
git add .
git commit -m "feat(scope): 你的提交信息"
```

### 3. 保持同步

```bash
# 定期同步上游仓库的最新代码
git fetch upstream
git rebase upstream/main
```

### 4. 推送到 Fork

```bash
git push origin feature/your-feature-name
```

### 5. 创建 Pull Request

1. 访问你的 Fork 页面
2. 点击 "New Pull Request"
3. 填写 PR 信息：
   - **标题**：简明扼要地描述改动
   - **描述**：详细说明：
     - 这个 PR 做了什么？
     - 为什么需要这个改动？
     - 相关的 Issue 编号（如 `Fixes #123`）
     - 测试说明
   - **截图**：如果有 UI 改动，附上截图
4. 提交 PR

### 6. Code Review

- 维护者会审查你的代码
- 可能会提出修改建议
- 根据反馈进行修改：

```bash
# 在原分支继续提交
git add .
git commit -m "fix: 根据 review 意见修改"
git push origin feature/your-feature-name
```

### 7. 合并

- Code review 通过后，维护者会合并你的 PR
- 恭喜你成为贡献者！🎉

## 📝 检查清单

在提交 PR 前，请确保：

- [ ] 代码遵循项目的代码规范
- [ ] 添加了必要的注释
- [ ] 更新了相关文档
- [ ] 测试了所有改动
- [ ] 提交消息符合规范
- [ ] PR 描述清晰完整
- [ ] 关联了相关 Issue

## 🎯 贡献建议

### 适合新手的任务

标记为 `good first issue` 的问题适合新手入门：

- 文档改进
- 代码注释补充
- 简单的 Bug 修复
- UI 细节优化

### 需要帮助的方向

- 🌍 多语言支持（i18n）
- 📱 移动端体验优化
- 🎨 UI/UX 改进
- ⚡️ 性能优化
- 🧪 单元测试
- 📚 文档完善

## 💬 交流讨论

有问题或想法？欢迎通过以下方式交流：

- 💬 [GitHub Discussions](https://github.com/isnl/f2f/discussions) - 讨论功能和想法
- 🐛 [GitHub Issues](https://github.com/isnl/f2f/issues) - 报告问题
- 📧 通过 GitHub 联系维护者

## 🙏 致谢

感谢所有为 F2F.icu 做出贡献的人！

每一个 PR、Issue、建议都让项目变得更好。

---

**再次感谢你的贡献！** ❤️

Happy Coding! 🚀



