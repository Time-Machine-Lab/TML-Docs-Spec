---
name: GitHub_README_Spec
description: 帮助开源项目作者为 GitHub 仓库生成结构清晰、风格大胆、组件丰富、对 Agent 和开发者双友好的 README 文档，覆盖项目简介、快速启动、功能说明、贡献指南等核心章节。
methodology:
  - "金字塔原理：结论先行——第一屏必须让访客在 10 秒内判断'这个项目是否值得我继续读'"
  - "渐进式披露：从 What → Why → How → Join，信息密度由浅入深"
  - "Show, Don't Tell：用徽章、截图、代码示例代替纯文字描述"
  - "风格简报 (Style Brief)：生成前必须先识别用户指定的审美关键词、目标受众和项目人格，再统一标题、配色、组件、章节命名和文案语气"
  - "组件化视觉叙事：优先参考外部优秀 README 的组件组合方式，如 capsule-render、shields.io、readme-typing-svg、GitHub Readme Stats、Mermaid、details 折叠块；组件必须服务信息表达，不能只做装饰"
  - "主动组件探索：当用户要求大胆、风格化或参考流行 README 时，Agent 可以主动搜索并挑选合适有趣的外部 README 组件；优先选择仍在维护、加载稳定、能表达项目信息的组件，并说明其用途"
  - "奇观与可用性平衡：允许天马行空的叙事和章节命名，但安装、运行、配置、贡献等行动路径必须保持可复制、可验证、可维护"
out_of_scope:
  - 详细的内部实现原理、算法推导或源码级解析（这些属于 Wiki 或 ARCHITECTURE.md 等独立文档）
  - 项目的商业计划、融资情况、团队组织架构等非技术信息
  - 不得逐段照搬外部仓库 README 的文案或结构；只能提取视觉方法、组件组合和信息架构模式
  - 不得为了炫技堆砌过多远程图片、徽章或动态组件，导致 README 加载慢、信息噪声过高或超过 GitHub 渲染限制
  - 不得引用来历不明、明显失效、需要泄露密钥或与项目主题无关的第三方组件
---

# GitHub 项目 README 文档模板

## 1. 项目头部（Hero Section）
---
required: true
description: |
  这是 README 的「门面」和视觉钩子，决定访客是否继续阅读。生成前先根据用户输入提取 3-5 个风格关键词（如二次元、赛博、复古终端、魔法学院、太空歌剧），并把它们落实到标题、配色、徽章、动态组件和一句话 Slogan 中。
  第一屏必须完成五件事：
  1. 用项目 Logo、capsule-render 横幅或风格化标题建立强视觉识别；
  2. 用一句话 Slogan 说清楚「这是什么 / 为谁解决什么问题」；
  3. 用 3-6 个徽章传递项目健康度和身份标签，优先使用 shields.io；
  4. 如果用户要求风格化，加入 readme-typing-svg、动态横幅、主题色徽章或轻量动图，但必须保持可读；
  5. 使用 1-2 句具有项目人格的短文案，让 README 不像模板生成物。
  Agent 可参考 G-Ark 示例的方法：动态横幅 + for-the-badge 徽章 + typing SVG + 一段隐喻式定位文案。除模板列出的组件外，Agent 可以自行搜索适合当前项目气质的有趣组件，例如贡献蛇形图、Star History、GitHub Profile Trophy、WakaTime/开发时长卡片、访问计数、终端风格统计卡、赞助/社区入口卡片等；只有当组件能表达项目状态、社区活跃度、技术栈或主题氛围时才使用。
format_instruction: 使用 HTML div align="center" 居中包裹；可使用 capsule-render 横幅作为首屏背景；徽章使用 Markdown 行内图片或 HTML img；动态组件不超过 3 类，徽章不超过 8 个；远程图片必须提供 alt 文本。若引入模板未列出的外部组件，必须在注释中写明组件用途和替换参数。
example: |
  <div align="center">
    <img src="https://capsule-render.vercel.app/api?type=waving&height=180&color=0:7C3AED,45:06B6D4,100:F97316&text=ProjectName&fontColor=ffffff&fontSize=64&fontAlignY=36&desc=Build%20Something%20Wild&descAlignY=58&animation=fadeIn" alt="ProjectName banner" width="100%" />

    <a href="https://github.com/owner/repo/actions"><img src="https://img.shields.io/github/actions/workflow/status/owner/repo/ci.yml?label=CI&style=for-the-badge&color=06B6D4" alt="CI Status" /></a>
    <a href="https://github.com/owner/repo/releases"><img src="https://img.shields.io/github/v/release/owner/repo?style=for-the-badge&color=7C3AED" alt="Latest Release" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/github/license/owner/repo?style=for-the-badge&color=F97316" alt="License" /></a>
    <a href="https://github.com/owner/repo/stargazers"><img src="https://img.shields.io/github/stars/owner/repo?style=for-the-badge&color=FACC15" alt="Stars" /></a>

    <br />

    <img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=700&size=24&pause=1100&color=06B6D4&center=true&vCenter=true&width=760&lines=One%20line%20value%20prop;Second%20line%20with%20personality;Third%20line%20that%20invites%20action" alt="Typing SVG" />

    <p>一句话说清楚项目定位，再用一句风格化隐喻给访客留下记忆点。</p>
  </div>
---

<!--
生成前请先确定 README 风格简报：
- 风格关键词：[例如：二次元 / 赛博 / 复古终端 / 太空歌剧 / 魔法学院]
- 项目人格：[例如：冷静工程师 / 热血冒险者 / 未来控制台 / 可爱助手]
- 主色方案：[例如：#7C3AED + #06B6D4 + #F97316]
- 参考组件：[capsule-render / shields.io / readme-typing-svg / github-readme-stats / Mermaid / details]
- 可自行探索组件：[根据项目主题搜索合适的 README widget，例如 Star History、贡献蛇形图、Profile Trophy、WakaTime、Visitor Badge、终端风格统计卡；只保留与项目表达有关的 1-3 个]
将下方 [owner] 和 [repo] 替换为实际的 GitHub 用户名和仓库名。
-->

<div align="center">

  <!-- 推荐：使用 capsule-render 或本地 banner 建立第一眼记忆点 -->
  <!-- <img src="https://capsule-render.vercel.app/api?type=waving&height=180&color=0:[主色1],50:[主色2],100:[主色3]&text=[项目名称]&fontColor=ffffff&fontSize=64&fontAlignY=36&desc=[英文短副标题]&descAlignY=58&animation=fadeIn" alt="[项目名称] banner" width="100%" /> -->

  # [项目名称]

  > [一句话 Slogan：说清楚这个项目是什么，为谁解决什么问题。语气要匹配风格关键词，不要写成通用产品介绍。]

  [![CI Status](https://img.shields.io/github/actions/workflow/status/[owner]/[repo]/ci.yml?label=CI&style=for-the-badge)](https://github.com/[owner]/[repo]/actions)
  [![Latest Release](https://img.shields.io/github/v/release/[owner]/[repo]?style=for-the-badge)](https://github.com/[owner]/[repo]/releases)
  [![License](https://img.shields.io/github/license/[owner]/[repo]?style=for-the-badge)](LICENSE)
  [![Stars](https://img.shields.io/github/stars/[owner]/[repo]?style=for-the-badge)](https://github.com/[owner]/[repo]/stargazers)
  <!-- 可选徽章示例（按需取消注释）：-->
  <!-- [![npm](https://img.shields.io/npm/v/[package-name]?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/[package-name]) -->
  <!-- [![Docker Pulls](https://img.shields.io/docker/pulls/[owner]/[image]?style=for-the-badge&logo=docker)](https://hub.docker.com/r/[owner]/[image]) -->
  <!-- [![Coverage](https://img.shields.io/codecov/c/github/[owner]/[repo]?style=for-the-badge&logo=codecov)](https://codecov.io/gh/[owner]/[repo]) -->

  <!-- 推荐：风格化项目可添加 typing SVG，但 lines 必须传递项目价值，不要只写口号 -->
  <!-- <img src="https://readme-typing-svg.demolab.com?font=[字体]&weight=700&size=24&pause=1100&color=[主色HEX]&center=true&vCenter=true&width=760&lines=[价值主张1];[价值主张2];[行动邀请]" alt="Typing SVG" /> -->

  <!-- 可选：如果项目适合展示增长、社区或开发节奏，可自行选择一个有信息价值的外部组件 -->
  <!-- 例：Star History 用于展示项目增长趋势；贡献蛇形图更适合个人/社区型项目；WakaTime 更适合开发者工具或个人项目。 -->

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
  同时必须把项目人格延续下来：普通项目可以专业清晰，用户要求风格化时要把章节标题、隐喻、短句和视觉组件统一成一个“世界观”，例如把知识库称为“星图控制台”，把首次使用称为“第一条咒语”。
  如果项目有线上 Demo、截图、GIF、终端录屏或架构图，必须在本节末尾插入，优先使用能展示核心体验的视觉资产。
format_instruction: 核心特性使用带风格的无序列表或 Markdown 表格；Demo 截图/GIF 使用 HTML div 居中包裹；允许用 Mermaid、terminal GIF、GitHub Readme Stats 卡片补充视觉表达，但每个组件必须有信息价值。
example: |
  **ProjectName** 是一座给后端任务流准备的「并发控制塔」：它把失控的 Promise 风暴压缩成可观测、可重试、可限速的任务航线。

  | 能力 | 它帮你挡住什么混乱 |
  |------|----------------------|
  | ✅ 并发限流 | 防止上游接口被瞬间打穿 |
  | 🔁 自动重试 | 让临时失败有秩序地重新起飞 |
  | ⚡ 零依赖 | 保持包体轻巧，不把工具箱变成仓库 |
  | 🔒 类型安全 | 在编译期拦住错误调用 |

  <div align="center">
    <img src="assets/demo.gif" alt="Demo" width="700" />
    <br /><em>展示核心功能的交互动图</em>
  </div>
---

[用 2-3 句话描述项目定位、核心价值主张，以及与同类方案的关键差异点。若用户提供风格要求，请把项目写成一个有鲜明人格的存在，而不是普通工具介绍。]

**核心特性：**

- ✅ [特性一：用动词开头，说明带来什么具体价值]
- 🔁 [特性二：可使用符合风格的符号，但不能牺牲可读性]
- ⚡ [特性三：突出技术亮点或量化优势，如「比 XX 方案快 3x」]
- 🔒 [特性四：可选，如安全性、兼容性、可追溯性]

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
  如果用户要求风格化，可以把章节标题改成更有主题感的名称（如「打开方式」「第一条咒语」「启动控制台」），但标题后必须保留英文或语义明确的说明，且步骤本身必须朴素、准确、可执行。
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
  风格化 README 应优先把功能组织成“地图”而不是清单：可按入口、场景、角色、阶段、工作流、能力域分组，像 G-Ark 示例中的「星图入口」「运转方式」一样，让读者一眼知道从哪里进入。
  Agent 可以在本节自行寻找更贴合项目的展示组件：技术栈项目可用 skill icons 或依赖徽章；成长型开源项目可用 Star History；数据/CLI/监控项目可用终端风格 SVG 或实时统计卡；社区型项目可用贡献者墙、Discord/交流群徽章或贡献活动图。选择组件时先判断“它能让读者更快理解什么”，不能只因为有趣就加入。
format_instruction: 功能列表优先使用 Markdown 表格展示（功能名/入口/阶段 | 作用 | 文档链接）；复杂流程可补 Mermaid 图；高级说明可放入 details 折叠块，避免首屏之后信息过载。外部组件最多补充 1-3 个，且每个组件附近必须有一句说明其信息价值。
example: |
  | 入口 | 作用 | 文档 |
  |------|------|------|
  | `queue.limit()` | 打开并发控制阀门 | [文档](docs/concurrency.md) |
  | `queue.retry()` | 给失败任务一条返航路线 | [文档](docs/retry.md) |
  | `queue.onProgress()` | 观察任务星图的实时进度 | [文档](docs/progress.md) |

  <details>
  <summary><strong>展开完整能力地图</strong></summary>

  ```mermaid
  flowchart LR
      Input[任务输入] --> Limit[并发限流]
      Limit --> Retry[失败重试]
      Retry --> Progress[进度回调]
      Progress --> Output[结果输出]
  ```

  </details>
---

### 4.1 功能列表（Feature Matrix）
---
required: false
description: 用表格、分组列表或能力地图系统化展示所有功能模块及其简要说明。风格化项目可以把「功能」命名为「入口」「装备」「技能树」「星图节点」等，但每一项仍必须说明真实用途，并附上跳转链接（文档页或代码示例）。
format_instruction: 必须使用 Markdown 表格，列名可按风格调整，但语义必须覆盖「功能/入口 | 说明/作用 | 文档/示例链接」。
---

| 入口/功能 | 作用 | 文档链接 |
|-----------|------|----------|
| [功能模块一，可使用风格化命名] | [一句话说明该功能的真实作用] | [文档](docs/[feature-1].md) |
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
  语气应友善且具体，避免写成「欢迎 PR」这种空话。风格化 README 可以延续世界观，比如把贡献称为「提交一张新星图」「投递一个补丁法术」，但必须同时给出标准 Issue/PR 流程。
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
 
