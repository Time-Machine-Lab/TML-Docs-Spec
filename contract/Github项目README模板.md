---
name: GitHub_README_Spec
description: 帮助开源项目作者为 GitHub 仓库生成结构清晰、风格大胆、组件丰富、对 Agent 和开发者双友好的 README 文档，覆盖项目简介、快速启动、功能说明、贡献指南等核心章节。
methodology:
  - "金字塔原理：结论先行——第一屏必须让访客在 10 秒内判断'这个项目是否值得我继续读'"
  - "渐进式披露：从 What → Why → How → Join，信息密度由浅入深"
  - "Show, Don't Tell：用徽章、截图、代码示例代替纯文字描述"
  - "风格简报 (Style Brief)：生成前必须先识别用户指定的审美关键词、目标受众和项目人格，再统一标题、配色、组件、章节命名和文案语气"
  - "外部灵感研究：当用户要求大胆、风格化、组织首页感、二次元/游戏/极客品牌等明确气质时，Agent 必须主动搜索不少于 3 个外部优秀 README 或 GitHub 组织页，优先观察其首屏叙事、项目矩阵、社区入口、组件组合和语气，而不是直接使用本模板 example"
  - "灵感转译矩阵：对每个参考对象只提取可迁移方法（如世界观入口、项目角色化、强 Banner、生态矩阵、极简 CTA、当前工作区块），再结合当前项目的类型、受众、维护阶段和品牌关键词重新设计；禁止照搬参考对象的章节顺序、文案、组件参数和视觉配方"
  - "组件化视觉叙事：可参考外部优秀 README 的组件组合方式，如 capsule-render、shields.io、readme-typing-svg、GitHub Readme Stats、Mermaid、details 折叠块、项目矩阵、社区入口卡片；组件必须服务信息表达，不能只做装饰"
  - "主动组件探索：Agent 必须优先搜索与当前项目气质匹配、仍在维护、加载稳定、能表达项目信息的外部 README 组件，并说明选择理由；只有在无法联网或用户明确禁止搜索时，才使用模板内置组件清单作为兜底"
  - "示例去模板化原则：本模板中的 example 只用于演示写作判断、信息密度和排版边界，不是可复制成品；生成 README 时必须改写为项目专属结构、标题、比喻、配色和组件组合"
  - "奇观与可用性平衡：允许天马行空的叙事和章节命名，但安装、运行、配置、贡献等行动路径必须保持可复制、可验证、可维护"
out_of_scope:
  - 详细的内部实现原理、算法推导或源码级解析（这些属于 Wiki 或 ARCHITECTURE.md 等独立文档）
  - 项目的商业计划、融资情况、团队组织架构等非技术信息
  - 不得把本模板 example 当作默认 README 成品输出；example 只能作为反面边界和方法提示，最终内容必须来自项目事实与外部灵感研究后的重新设计
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
  在设计首屏前，Agent 必须先做「灵感采样」：围绕项目主题搜索不少于 3 个优秀 README/组织页，并把它们拆成方法，而不是把某个示例当作答案。可参考的灵感类型包括：Moeru AI 的「研究所/虚拟生命世界观」、DeepGHS 的「垂直二次元技术定位」、AnimeThemes 的「动漫主题但实用克制」、IzanagiCraft 的「项目即世界入口」、Cyberpunk 2077 设置类 Mod 工具的「垂直场景 + 极客工具叙事」、LobeHub 的「产品宇宙与项目矩阵」、Tauri 的「强 Banner + 少量入口」、Charm 的「一句话品牌锤」，以及 awesome-github-organization-profile-readme / awesome-github-profile-readme 这类灵感合集中的分类方法。
  设计时先写出 1 句「本项目首屏策略」：它要像什么、避开什么、用哪些组件承载哪些信息。除模板列出的组件外，Agent 可以自行搜索适合当前项目气质的有趣组件，例如贡献蛇形图、Star History、GitHub Profile Trophy、WakaTime/开发时长卡片、访问计数、终端风格统计卡、赞助/社区入口卡片等；只有当组件能表达项目状态、社区活跃度、技术栈或主题氛围时才使用。
format_instruction: 使用 HTML div align="center" 居中包裹；可使用 capsule-render 横幅、本地 Banner、品牌 Logo 或纯 Markdown 标题作为首屏锚点；徽章使用 Markdown 行内图片或 HTML img；动态组件不超过 3 类，徽章不超过 8 个；远程图片必须提供 alt 文本。若引入模板未列出的外部组件，必须在注释中写明组件用途和替换参数。禁止原样输出本模板 example 中的示例名称、文案、颜色和组件组合。
example: |
  这是「首屏设计推导」示例，不是可直接复制的 README 代码：

  | 灵感来源类型 | 可迁移方法 | 转译到当前项目时要回答的问题 | 禁止事项 |
  |-------------|------------|------------------------------|----------|
  | 萌系 AI / Anime-Tech 组织 | 用研究所、角色、虚拟生命等设定强化记忆点 | 这个项目是否真的有 AI、角色、创作工具或二次元受众？ | 不要直接套用 cyber waifu、AIRI、anime infrastructure 等现成措辞 |
  | 游戏 / 世界观项目 | 把仓库写成一个入口、地图或控制台 | 用户第一次进入时需要看到哪条主线任务？ | 不要让世界观压过安装和使用路径 |
  | 极客品牌 / 工具宇宙 | 强 Banner + 一句话品牌锤 + 项目矩阵/生态入口 | 这个项目是一件工具、一个套件，还是一个生态入口？ | 不要为了像大厂首页而堆空泛口号 |

  首屏策略示例：
  - 若项目是二次元 AI 工具：使用「研究终端 / 角色实验室」隐喻，首屏包含 Logo、3-5 个健康度徽章、一个短 Slogan、一个 Demo GIF；不强行加入产品矩阵。
  - 若项目是工具集合或规范生态：使用「工具宇宙 / 控制台」隐喻，首屏包含强 Banner、核心入口表格、Docs/Community/Sponsor 三类 CTA；动态组件从轻。
  - 若项目是极简工程工具：使用一句话品牌锤 + 少量徽章 + 快速开始入口；避免复杂动图和过度设定。
---

<!--
生成前请先确定 README 风格简报：
- 风格关键词：[例如：二次元 / 赛博 / 复古终端 / 太空歌剧 / 魔法学院]
- 项目人格：[例如：冷静工程师 / 热血冒险者 / 未来控制台 / 可爱助手]
- 主色方案：[例如：#7C3AED + #06B6D4 + #F97316]
- 参考组件：[capsule-render / shields.io / readme-typing-svg / github-readme-stats / Mermaid / details]
- 外部灵感研究：[必须根据项目主题主动搜索 3-5 个优秀 README/组织页，可从用户给出的案例和 awesome README 合集出发；只记录可迁移方法，如「世界观入口」「项目矩阵」「一句话品牌锤」「社区入口」「当前工作区块」，不要复制章节结构和文案]
- 可自行探索组件：[根据项目主题搜索合适的 README widget，例如 Star History、贡献蛇形图、Profile Trophy、WakaTime、Visitor Badge、终端风格统计卡；只保留与项目表达有关的 1-3 个]
- 禁止直接套用：[本模板 example、外部仓库 README、固定配色、固定徽章组合、固定章节命名]
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
  这是「概览表达模式」示例，不是固定文案：

  | 项目类型 | 推荐概览写法 | 可用组件 | 需要避免 |
  |----------|--------------|----------|----------|
  | 单一开发工具 | 2 句话说明解决的具体痛点 + 3-5 个能力点 | 最小 Demo GIF、终端录屏、核心 API 表格 | 空泛世界观、过多动效 |
  | 二次元/创作/AI 项目 | 用轻量设定解释项目人格，再立刻落回真实能力 | 角色图、Demo、模型/数据集徽章、社区入口 | 把设定写成剧情简介 |
  | 工具生态/组织首页 | 先说明生态定位，再用矩阵展示子项目入口 | 项目矩阵、Docs/Discord/Sponsor CTA、Star History | 把所有项目堆成无说明链接 |
  | 游戏/Mod/社区项目 | 把项目写成世界入口或玩家工具箱，突出参与方式 | 截图、服务器/版本徽章、路线图 | 只写氛围，不写安装和兼容版本 |

  生成时从上表选择最贴合的一种或混合两种，并把「能力列名」「隐喻」「截图说明」改成当前项目专属表达。
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
  风格化 README 应优先把功能组织成“地图”而不是清单：可按入口、场景、角色、阶段、工作流、能力域分组，让读者一眼知道从哪里进入。地图命名必须来自当前项目事实和风格简报，不得沿用模板中的示例词。
  Agent 可以在本节自行寻找更贴合项目的展示组件：技术栈项目可用 skill icons 或依赖徽章；成长型开源项目可用 Star History；数据/CLI/监控项目可用终端风格 SVG 或实时统计卡；社区型项目可用贡献者墙、Discord/交流群徽章或贡献活动图。选择组件时先判断“它能让读者更快理解什么”，不能只因为有趣就加入。
format_instruction: 功能列表优先使用 Markdown 表格展示（功能名/入口/阶段 | 作用 | 文档链接）；复杂流程可补 Mermaid 图；高级说明可放入 details 折叠块，避免首屏之后信息过载。外部组件最多补充 1-3 个，且每个组件附近必须有一句说明其信息价值。
example: |
  这是「功能组织方式」示例，不是固定功能名：

  | 组织方式 | 适合场景 | 表格列名建议 | 可补充组件 |
  |----------|----------|--------------|------------|
  | API/命令入口 | SDK、CLI、开发者工具 | 入口/命令、作用、示例/文档 | 终端录屏、代码片段 |
  | 场景地图 | 工作流工具、自动化系统 | 场景、解决的问题、推荐路径 | Mermaid 流程图、details |
  | 项目矩阵 | 组织首页、生态仓库 | 项目、定位、状态、仓库链接 | Star History、生态图 |
  | 能力域 | AI、数据、基础设施项目 | 能力域、输入/输出、适用用户 | 架构图、模型/数据集徽章 |

  生成时先选择一种组织方式，再把列名改成符合项目气质但语义清楚的名称。例如「入口」可以改成「控制台」「节点」「工具箱」，但每一行仍必须说明真实用途并链接到文档或示例。
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
 
