---
name: GitHub_README_Spec
description: 帮助开源项目作者为 GitHub 仓库生成结构清晰、吸引人、对 Agent 和开发者双友好的 README 文档，覆盖项目简介、快速启动、功能说明、贡献指南等核心章节。
methodology:
  - "金字塔原理：结论先行——第一屏必须让访客在 10 秒内判断'这个项目是否值得我继续读'"
  - "渐进式披露：从 What → Why → How → Join，信息密度由浅入深"
  - "Show, Don't Tell：用徽章、截图、代码示例代替纯文字描述"
out_of_scope:
  - 详细的内部实现原理、算法推导或源码级解析（这些属于 Wiki 或 ARCHITECTURE.md 等独立文档）
  - 项目的商业计划、融资情况、团队组织架构等非技术信息
---

# GitHub 项目 README 文档模板

## 1. 项目头部（Hero Section）
---
required: true
description: |
  这是 README 的「门面」，决定访客是否继续阅读。目标是在第一屏内完成三件事：
  1. 用项目 Logo 或标题建立视觉识别；
  2. 用一句话 Slogan 说清楚「这是什么 / 解决什么问题」；
  3. 用徽章（Badges）快速传递项目健康度信号（构建状态、版本、许可证、Stars 数等）。
  Agent 生成徽章时，优先使用 shields.io，顺序建议：CI 状态 → 最新版本 → License → Stars。
format_instruction: 徽章使用 Markdown 行内图片语法渲染在同一行；Logo 和标题使用 HTML div align="center" 居中包裹。
example: |
  <div align="center">
    <img src="assets/logo.png" alt="ProjectName Logo" width="120" />
    <h1>ProjectName</h1>
    <p>一句话说清楚这个项目是什么，解决什么核心痛点。</p>
    <a href="https://github.com/owner/repo/actions"><img src="https://img.shields.io/github/actions/workflow/status/owner/repo/ci.yml?label=CI&style=flat-square" /></a>
    <a href="https://github.com/owner/repo/releases"><img src="https://img.shields.io/github/v/release/owner/repo?style=flat-square" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/github/license/owner/repo?style=flat-square" /></a>
    <a href="https://github.com/owner/repo/stargazers"><img src="https://img.shields.io/github/stars/owner/repo?style=flat-square" /></a>
  </div>
---

<!-- 将下方 [owner] 和 [repo] 替换为实际的 GitHub 用户名和仓库名 -->

<div align="center">

  <!-- 如有项目 Logo，取消注释并替换路径 -->
  <!-- <img src="assets/logo.png" alt="[项目名称] Logo" width="120" /> -->

  # [项目名称]

  > [一句话 Slogan：说清楚这个项目是什么，为谁解决什么问题]

  [![CI Status](https://img.shields.io/github/actions/workflow/status/[owner]/[repo]/ci.yml?label=CI&style=flat-square)](https://github.com/[owner]/[repo]/actions)
  [![Latest Release](https://img.shields.io/github/v/release/[owner]/[repo]?style=flat-square)](https://github.com/[owner]/[repo]/releases)
  [![License](https://img.shields.io/github/license/[owner]/[repo]?style=flat-square)](LICENSE)
  [![Stars](https://img.shields.io/github/stars/[owner]/[repo]?style=flat-square)](https://github.com/[owner]/[repo]/stargazers)
  <!-- 可选徽章示例（按需取消注释）：-->
  <!-- [![npm](https://img.shields.io/npm/v/[package-name]?style=flat-square)](https://www.npmjs.com/package/[package-name]) -->
  <!-- [![Docker Pulls](https://img.shields.io/docker/pulls/[owner]/[image]?style=flat-square)](https://hub.docker.com/r/[owner]/[image]) -->
  <!-- [![Coverage](https://img.shields.io/codecov/c/github/[owner]/[repo]?style=flat-square)](https://codecov.io/gh/[owner]/[repo]) -->

</div>

---

## 2. 项目概览（Overview）
---
required: true
description: |
  用结构化内容回答访客心中最关键的三个问题：
  - What（它是什么）：项目类型、定位、核心能力
  - Why（为什么存在）：解决了哪个现实痛点，对比现有方案的优势
  - For whom（给谁用）：目标用户画像
  如果项目有线上 Demo 或截图，必须在本节末尾插入，优先使用 GIF 动图展示核心交互流程。
format_instruction: 核心特性使用无序列表（带 emoji 前缀如 ✅ 或 ⚡）呈现；Demo 截图/GIF 使用 HTML div 居中包裹。
example: |
  **ProjectName** 是一个轻量级 TypeScript 库，专为需要处理大规模异步任务的后端开发者设计，
  解决了原生 Promise.all 在高并发场景下缺乏流控能力的问题。

  **核心特性：**
  - ✅ 并发限流：精确控制同时运行的任务数量，防止资源耗尽
  - ✅ 自动重试：内置指数退避策略，失败任务自动重试最多 N 次
  - ⚡ 零依赖：仅 2KB（gzipped），无任何第三方依赖
  - 🔒 类型安全：完整的 TypeScript 类型定义，无需额外安装 @types

  <div align="center">
    <img src="assets/demo.gif" alt="Demo" width="700" />
    <br /><em>展示核心功能的交互动图</em>
  </div>
---

[用 2-3 句话描述项目定位、核心价值主张，以及与同类方案的关键差异点]

**核心特性：**

- ✅ [特性一：用动词开头，说明带来什么具体价值]
- ✅ [特性二：量化优势，如「比 XX 方案快 3x，内存占用降低 60%」]
- ⚡ [特性三：突出技术亮点]
- 🔒 [特性四：可选，如安全性、兼容性特性]

<!-- 如有截图或演示 GIF，取消注释并替换路径 -->
<!--
<div align="center">
  <img src="assets/demo.gif" alt="[项目名称] Demo" width="700" />
  <br /><em>[截图说明：一句话描述截图展示的内容]</em>
</div>
-->

---

## 3. 快速开始（Quick Start）
---
required: true
description: |
  这是 README 中最重要的「转化」章节，目标是让读者从「感兴趣」变成「跑起来了」。
  必须包含三个子节：环境要求 → 安装 → 第一个可运行示例。
  核心要求：所有命令必须可以直接复制粘贴执行，不允许有歧义的省略号代替真实命令。
  如果支持多种安装方式（npm/pip/Docker/源码编译），按推荐程度从高到低排列。
methodology: "5分钟原则：一个有经验的开发者应该能在 5 分钟内跑通第一个示例"
---

### 3.1 环境要求（Prerequisites）
---
required: false
description: 列出运行本项目所需的最低环境依赖，包括语言版本、包管理器、必要系统工具。每项注明最低版本号，不要写「最新版」。
format_instruction: 使用无序列表，格式为「工具名 >= 版本号」，关键依赖可加超链接指向官方安装页。
example: |
  - [Node.js](https://nodejs.org/) >= 18.0
  - [pnpm](https://pnpm.io/) >= 8.0
  - [Docker](https://www.docker.com/) >= 24.0（仅容器化部署时需要）
---

- [[语言/运行时，如 Node.js]](https://nodejs.org/) >= [最低版本号]
- [[包管理器，如 pnpm / pip / Maven]]([安装页链接]) >= [最低版本号]
- [[其他必要工具]]（[适用场景说明，如：仅容器化部署时需要]）

### 3.2 安装（Installation）
---
required: true
description: 提供可直接复制执行的安装命令。每种安装方式用注释说明适用场景，将最推荐的方式放在最前。
format_instruction: 命令必须放在 ```bash 代码块中，使用 # 注释区分不同安装方式。
example: |
  ```bash
  # 方式一：npm 安装（推荐）
  npm install project-name

  # 方式二：pnpm
  pnpm add project-name

  # 方式三：从源码构建
  git clone https://github.com/owner/repo.git
  cd repo && npm install && npm run build
  ```
---

```bash
# [推荐方式，如：使用 npm 安装]
[安装命令]

# [可选方式二，如：Docker]
# docker pull [owner]/[image-name]:latest

# [可选方式三，如：从源码构建]
# git clone https://github.com/[owner]/[repo].git
# cd [repo] && [构建命令]
```

### 3.3 第一个示例（Hello World）
---
required: true
description: |
  提供最小可运行示例（Minimal Viable Example）。
  目标：读者复制代码、替换必要配置后，能立刻看到输出结果。
  示例必须是真实可运行的代码，不允许使用伪代码或省略关键步骤。
  如果需要 API Key 或配置文件，在代码注释中说明如何获取。
format_instruction: 代码块必须标注语言（```python / ```typescript 等），代码后用「预期输出：」说明运行结果。
example: |
  ```typescript
  import { TaskQueue } from 'project-name';

  const queue = new TaskQueue({ concurrency: 5 });

  const results = await queue.runAll([
    () => fetch('https://api.example.com/data/1'),
    () => fetch('https://api.example.com/data/2'),
    () => fetch('https://api.example.com/data/3'),
  ]);

  console.log(results); // [Response, Response, Response]
  ```

  预期输出：控制台打印 3 个成功的 Response 对象，最大并发数不超过 5。
---

```[语言，如：python / typescript / bash]
[可直接复制运行的最小示例代码]
# 如需 API Key 或配置：将 YOUR_API_KEY 替换为从 [配置页面链接] 获取的密钥
```

预期输出：[描述运行成功后终端/界面上会看到什么结果]

---

## 4. 功能详情（Features & Documentation）
---
required: false
description: |
  在快速开始之后，面向想深入了解的访客，提供更完整的功能介绍和使用指南。
  如果文档较长，优先链接到外部文档站（如 docs.example.com 或 Wiki），而不是在 README 中堆砌大量文字。
  本章节为选填，小型项目可省略，直接在「快速开始」中涵盖常用用法。
format_instruction: 功能列表使用 Markdown 表格展示（功能名 | 说明 | 文档链接），配置项使用代码块。
example: |
  | 功能 | 说明 | 文档 |
  |------|------|------|
  | 并发限流 | 控制同时运行的最大任务数 | [文档](docs/concurrency.md) |
  | 自动重试 | 失败任务按指数退避策略重试 | [文档](docs/retry.md) |
  | 进度回调 | 实时获取任务完成进度 | [文档](docs/progress.md) |
---

### 4.1 功能列表（Feature Matrix）
---
required: false
description: 用表格或分组列表，系统化展示所有功能模块及其简要说明，每项功能附上跳转链接（文档页或代码示例）。
format_instruction: 必须使用 Markdown 表格，列为「功能 | 说明 | 文档/示例链接」。
---

| 功能 | 说明 | 文档链接 |
|------|------|----------|
| [功能模块一] | [一句话说明该功能的作用] | [文档](docs/[feature-1].md) |
| [功能模块二] | [一句话说明] | [示例](#[anchor]) |
| [功能模块三] | [一句话说明] | [文档](docs/[feature-3].md) |

### 4.2 配置说明（Configuration）
---
required: false
description: |
  说明项目支持的所有配置项。优先提供完整的配置文件示例（带注释），再用表格列出每个参数的类型、默认值、说明。
  Agent 必须确保配置示例中的每个字段都有对应注释，不允许出现无注释的神秘配置项。
format_instruction: 配置文件示例使用带语言标注的代码块（如 ```yaml / ```json），参数说明使用表格（参数名 | 类型 | 默认值 | 说明）。
example: |
  ```yaml
  # config.yaml
  concurrency: 5          # 最大并发任务数，默认 5
  retry:
    maxAttempts: 3        # 最大重试次数
    backoff: exponential  # 退避策略：linear | exponential
  timeout: 30000          # 单任务超时（毫秒），0 表示不限制
  ```

  | 参数 | 类型 | 默认值 | 说明 |
  |------|------|--------|------|
  | `concurrency` | `number` | `5` | 最大并发任务数 |
  | `retry.maxAttempts` | `number` | `3` | 失败后最大重试次数 |
  | `timeout` | `number` | `0` | 单任务超时毫秒数，0 为不限制 |
---

```[yaml / json / toml，按项目实际配置格式]
# [配置文件名，如 config.yaml]
[配置项一]: [默认值]   # [该配置项的用途说明]
[配置项二]: [默认值]   # [该配置项的用途说明]
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `[参数名]` | `[类型]` | `[默认值]` | [参数用途说明] |

---

## 5. 贡献指南（Contributing）
---
required: false
description: |
  面向潜在贡献者，说明如何参与项目贡献。目标是降低「第一次贡献」的心理门槛。
  必须包含：如何提 Issue（问题模板说明）+ 如何提交 PR（分支规范、提交信息格式）。
  可选包含：本地开发环境搭建步骤、代码规范、测试要求。
  语气应友善且具体，避免写成「欢迎 PR」这种空话。
format_instruction: 开发流程使用有序列表（步骤化），提交规范使用代码块展示示例。
example: |
  欢迎任何形式的贡献！无论是 Bug 报告、功能建议，还是代码提交。

  **提交 Issue 前，请先：**
  - 搜索现有 Issues，确认问题尚未被报告
  - 使用对应的 Issue 模板（Bug Report / Feature Request）

  **提交 PR 流程：**
  1. Fork 本仓库并创建你的特性分支：`git checkout -b feat/your-feature`
  2. 提交变更：遵循 Conventional Commits 规范
     ```
     feat(queue): add priority task support
     fix(retry): handle timeout edge case
     docs(readme): update configuration section
     ```
  3. 确保所有测试通过：`npm test`
  4. 发起 Pull Request，描述你的改动和动机
---

欢迎任何形式的贡献！在开始之前，请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)（如有）。

**提交 Issue 前，请先：**

- 搜索[现有 Issues](https://github.com/[owner]/[repo]/issues)，确认问题尚未被报告
- 使用对应的 Issue 模板（Bug Report / Feature Request）

**本地开发环境搭建：**

```bash
# 1. Fork 并克隆仓库
git clone https://github.com/[your-username]/[repo].git
cd [repo]

# 2. 安装依赖
[安装命令，如：npm install]

# 3. 运行测试，确认环境正常
[测试命令，如：npm test]
```

**提交 PR 流程：**

1. 基于 `main` 创建特性分支：`git checkout -b feat/your-feature-name`
2. 遵循 [Conventional Commits](https://www.conventionalcommits.org/) 提交规范：
   ```
   feat([scope]): 添加了什么新功能
   fix([scope]): 修复了什么问题
   docs([scope]): 更新了哪部分文档
   ```
3. 确保所有测试通过：`[测试命令]`
4. 发起 Pull Request，清晰描述改动内容和动机

---

## 6. 路线图（Roadmap）
---
required: false
description: |
  展示项目未来的发展方向，帮助访客判断项目是否活跃、是否满足长期需求。
  使用 GitHub Issues 的 Milestone 链接或简单的任务列表即可，不需要详细的时间表。
  如果项目尚处于早期阶段，本章节尤为重要——它能显著提升访客信心。
format_instruction: 已完成项使用 [x]，进行中使用 [ ] + 🔄 前缀，计划中使用 [ ]。
example: |
  - [x] 核心并发控制功能
  - [x] 自动重试机制
  - [ ] 🔄 优先级队列支持（进行中）
  - [ ] 可视化监控面板
  - [ ] 插件系统
---

- [x] [已完成的里程碑功能一]
- [x] [已完成的里程碑功能二]
- [ ] 🔄 [正在开发的功能]（进行中）
- [ ] [计划中的功能一]
- [ ] [计划中的功能二]

> 查看完整路线图：[GitHub Projects / Milestones 链接]

---

## 7. 许可证与致谢（License & Acknowledgements）
---
required: false
description: |
  声明项目许可证，并向依赖的开源项目或重要贡献者致谢。
  许可证声明是开源项目的必要组成部分，强烈建议保留；致谢部分为选填。
format_instruction: 许可证使用一句话声明 + 链接到 LICENSE 文件；致谢使用无序列表。
example: |
  本项目基于 [MIT License](LICENSE) 开源。

  **致谢：**
  - [p-limit](https://github.com/sindresorhus/p-limit) — 并发控制核心灵感来源
  - 所有提交过 Issue 和 PR 的贡献者们 ❤️
---

本项目基于 [[许可证名称，如 MIT License]](LICENSE) 开源。

<!-- 可选：致谢部分 -->
<!--
**致谢：**
- [[依赖项目或工具名]](链接) — [说明参考或使用了它的哪个部分]
- 所有提交过 Issue 和 PR 的贡献者们 ❤️
-->
 