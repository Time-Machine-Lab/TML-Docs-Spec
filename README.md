<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&height=190&color=0:0EA5E9,45:7C3AED,100:F97316&text=TML-Docs-Spec&fontColor=ffffff&fontSize=58&fontAlignY=35&desc=Contracts%20for%20Human%20x%20Agent%20Collaboration&descAlignY=58&animation=fadeIn" alt="TML-Docs-Spec banner" width="100%" />

  [![Publish CLI](https://img.shields.io/github/actions/workflow/status/Time-Machine-Lab/TML-Docs-Spec/publish.yml?label=Publish%20CLI&style=for-the-badge&color=0EA5E9)](https://github.com/Time-Machine-Lab/TML-Docs-Spec/actions/workflows/publish.yml)
  [![Stars](https://img.shields.io/github/stars/Time-Machine-Lab/TML-Docs-Spec?style=for-the-badge&color=F97316)](https://github.com/Time-Machine-Lab/TML-Docs-Spec/stargazers)
  [![Node](https://img.shields.io/badge/Node.js-%3E%3D18.18-22C55E?style=for-the-badge&logo=node.js&logoColor=white)](TMLSPEC-cli/package.json)
  [![Contracts](https://img.shields.io/badge/Contracts-15-7C3AED?style=for-the-badge)](CONTRACT_INDEX.md)
  [![Agent Ready](https://img.shields.io/badge/Agent-Ready-06B6D4?style=for-the-badge)](skill/tml-spec-doc-template-create/SKILL.md)

  <br />

  <img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=700&size=24&pause=1200&color=0EA5E9&center=true&vCenter=true&width=840&lines=One%20contract%20library%20for%20every%20team%20document;Make%20AI%20agents%20read%20the%20same%20map%20as%20humans;Turn%20scattered%20knowledge%20into%20executable%20specs" alt="Typing SVG" />

  <p>
    一座给团队和 AI Agent 共用的文档契约星图：把模板、方法论、目录规范和生成技能收束成可执行的协作协议。
  </p>

</div>

---

## 2. 项目概览（Overview）

**TML-Docs-Spec** 不是一堆静态 Markdown 模板，而是一套面向 Multi-Agent 协作的“文档契约库”。它把项目概念、架构设计、领域模块、API、DDL、会议记录、任务书等高频文档沉淀为标准模板，让人类团队和 AI Agent 在同一套结构、边界和方法论里协作。

如果普通 README 是说明书，TML-Docs-Spec 更像一座“上下文控制台”：先用 `contract/` 定义文档应该长什么样，再用 Skill 或 CLI 把这些契约注入到具体项目中，让 Agent 生成内容时有地图、有护栏、有入口。

**核心能力：**

| 能力 | 它解决什么混乱 |
|------|----------------|
| 原子化文档契约 | 每个模板只负责一种文档类型，明确该写什么、不该写什么 |
| Agent 可执行指令 | 模板内置 YAML Frontmatter、description、example，让 Agent 知道如何生成 |
| 方法论驱动 | 将黄金圈、DDD、4+1、SCQA、阶段关卡等方法论转成写作约束 |
| CLI 初始化器 | `tml-spec init` 可为项目注入 docs 目录、AI commands、skills 和 OpenSpec 集成 |
| 多 IDE 适配 | 支持 Claude Code、Cursor、GitHub Copilot、Gemini CLI、OpenCode、Codex、Trae |

![TML Docs Spec Flow](https://quickchart.io/graphviz?graph=digraph%20G%20%7Brankdir%3DLR%3Bnode%20%5Bshape%3Dbox%2Cstyle%3D%22rounded%2Cfilled%22%2Ccolor%3D%22%237C3AED%22%2Cfillcolor%3D%22%23F5F3FF%22%2Cfontname%3D%22Microsoft%20YaHei%22%5D%3BIdea%20%5Blabel%3D%22Idea%20%2F%20Need%22%5D%3BContract%20%5Blabel%3D%22contract%2F%20Templates%22%5D%3BSkill%20%5Blabel%3D%22tml-docs-spec-generate%22%5D%3BDoc%20%5Blabel%3D%22Structured%20Docs%22%5D%3BAgent%20%5Blabel%3D%22Agent-readable%20Context%22%5D%3BIdea-%3EContract-%3ESkill-%3EDoc-%3EAgent%3B%7D)

---

## 3. 快速开始（Quick Start）

### 3.1 环境要求（Prerequisites）

- [Node.js](https://nodejs.org/) >= 18.18（使用 `TMLSPEC-cli` 时需要）
- npm >= 9.0（安装 CLI 时需要）
- 任意支持 AI commands / skills / prompts 的 AI IDE：Claude Code、Cursor、Trae、GitHub Copilot、Gemini CLI、OpenCode、Codex
- 可访问 GitHub 与团队配置的 npm registry

### 3.2 安装（Installation）

如果你只是想查看或复用模板，可以直接克隆本仓库：

```bash
git clone https://github.com/Time-Machine-Lab/TML-Docs-Spec.git
cd TML-Docs-Spec
```

如果你想把 TML 工作流注入到自己的项目中，使用 CLI：

```bash
# 如团队使用私有源，先配置 @tml registry
npm config set "@tml:registry=https://mxeutgbf.cn-hk1.rainapp.top/"

# 安装 CLI
npm install -g @tml/tmlspec-cli

# 验证安装
tml-spec --version
```

### 3.3 第一个示例（Hello World）

在任意 AI IDE 中，直接让 Agent 使用模板生成文档：

```markdown
调用 tml-docs-spec-generate 技能。
模板：Project_Pitch_Spec
内容：帮我写一份“新一代文档管理系统”的概念介绍。核心解决当前团队文档散落各处、AI 难以准确理解上下文的痛点，目标是提供一个对人和 Agent 双重友好的集中式规范库。
```

预期输出：Agent 会读取 `contract/项目概念介绍模板.md`，按模板的方法论和章节约束生成一份干净的 Markdown 文档，并移除所有模板级 Frontmatter。

也可以在一个新项目中启动完整工作台：

```bash
cd your-project
tml-spec init
```

预期输出：CLI 交互式选择目标目录、AI IDE 和 Coding 模式，然后生成 `docs/` 结构、TML commands，并安装默认文档生成技能。

---

## 4. 功能详情（Features & Documentation）

TML-Docs-Spec 的入口不是单点，而是一组可组合的控制台。新人从 `CONTRACT_INDEX.md` 找模板，维护者在 `contract/` 扩展契约，项目团队用 `TMLSPEC-cli` 把规范注入到自己的工程。

| 入口 | 作用 | 文档/位置 |
|------|------|-----------|
| `CONTRACT_INDEX.md` | 全部模板的权威索引，记录 name、路径、类型和适用场景 | [查看索引](CONTRACT_INDEX.md) |
| `contract/` | 文档模板与系统指令仓库，包含 README、架构、DDD、DDL、OpenAPI 等契约 | [进入契约库](contract/) |
| `YAML_FRONTMATTER_SPEC.md` | 模板元数据规范，定义模板创建和文档生成时如何处理 Frontmatter | [查看规范](YAML_FRONTMATTER_SPEC.md) |
| `skill/tml-spec-doc-template-create/` | 用于创建新文档模板的 Skill | [查看 Skill](skill/tml-spec-doc-template-create/SKILL.md) |
| `TMLSPEC-cli/` | 初始化团队文档工作流、AI commands 和 skills 的 CLI | [查看 CLI](TMLSPEC-cli/) |
| `docs/tml-spec-cli使用教程.md` | CLI 从安装到初始化的完整教程 | [查看教程](docs/tml-spec-cli使用教程.md) |
| `docs/tml-openspec-coding开发流程规范.md` | TML + OpenSpec 的 AI 编码流程约束 | [查看流程](docs/tml-openspec-coding开发流程规范.md) |

### 4.1 契约矩阵（Contract Matrix）

| 契约名称 | 类型 | 适用场景 |
|----------|------|----------|
| `Project_Pitch_Spec` | 文档模板 | 项目概念介绍，说明是什么、为什么做 |
| `GitHub_README_Spec` | 文档模板 | 生成风格化、组件丰富的 GitHub README |
| `Architecture_Design_Spec` | 文档模板 | 系统顶层架构设计，聚焦边界、权衡和数据流 |
| `Domain_Module_Design_Spec` | 文档模板 | DDD 单模块设计，沉淀聚合、约束、策略和状态行为 |
| `Dev_Guidelines_Spec` | 文档模板 | 团队或项目级开发规范 |
| `Task_Assignment_Spec` | 文档模板 | 平滑移交任务，消除执行信息差 |
| `Phase_Gate_Process_Spec` | 文档模板 | 定义阶段关卡、流转标准和生命周期 |
| `SQL_DDL_Generation_Spec` | 系统指令 | 约束 Agent 输出纯 `.sql` 数据库 DDL |
| `OpenAPI_Generation_Spec` | 系统指令 | 约束 Agent 输出 OpenAPI 3.0.3 `.yaml` |

完整清单请以 [CONTRACT_INDEX.md](CONTRACT_INDEX.md) 为准。

<details>
<summary><strong>展开 CLI 会在项目中生成什么</strong></summary>

```text
your-project/
├── .cursor/ or .codex/ or .claude/ ...
│   ├── commands/
│   │   ├── tml-doctor.md
│   │   ├── tml-update.md
│   │   └── tml-covenant-sync.md
│   └── skills/
│       └── tml-docs-spec-generate/
├── docs/
│   ├── api/
│   ├── sql/
│   ├── design/
│   └── spec/
└── .openspec/   # 选择 OpenSpec 模式时生成
```

</details>

<div align="center">

  <a href="https://star-history.com/#Time-Machine-Lab/TML-Docs-Spec&Date">
    <img src="https://api.star-history.com/svg?repos=Time-Machine-Lab/TML-Docs-Spec&type=Date" alt="TML-Docs-Spec Star History" width="700" />
  </a>
  <br />
  <em>Star History 用于观察契约库的社区增长趋势。</em>

</div>

---

## 5. 贡献指南（Contributing）

欢迎为 TML-Docs-Spec 提交新的文档契约、修正已有模板，或改进 CLI/工作流。这里的每一次贡献，最好都能回答一个问题：它是否让人类和 Agent 更容易共享上下文？

**提交新模板前，请先确认：**

- 模板是否已经能在 [CONTRACT_INDEX.md](CONTRACT_INDEX.md) 中找到同类能力
- 是否包含全局 Frontmatter：`name`、`description`、`methodology`、`out_of_scope`
- 每个 `##` / `###` 章节是否包含章节级 Frontmatter
- 关键章节是否提供 `example`，帮助 Agent 生成高质量内容
- 是否明确写出该模板不负责什么，避免文档边界膨胀

**本地开发与验证：**

```bash
# 克隆仓库
git clone https://github.com/Time-Machine-Lab/TML-Docs-Spec.git
cd TML-Docs-Spec

# 如需开发 CLI
cd TMLSPEC-cli
npm install
npm run build
npm run dev -- init
```

**提交 PR 流程：**

1. 基于 `main` 创建分支：`git checkout -b docs/your-contract-name`
2. 在 `contract/` 新增或修改模板，并同步检查 `CONTRACT_INDEX.md`
3. 遵循 [Conventional Commits](https://www.conventionalcommits.org/)：

   ```text
   feat(contract): add bug report spec
   docs(readme): refresh project guide
   fix(template): clarify frontmatter rule
   ```

4. 发起 Pull Request，说明模板解决的场景、边界和使用方式

---

## 6. 路线图（Roadmap）

- [x] 建立核心文档契约：项目概念、架构设计、领域模块、开发规范
- [x] 增加系统指令型契约：SQL DDL、OpenAPI
- [x] 提供 `tml-spec init` 初始化器，适配多种 AI IDE
- [x] 引入 README 风格化生成模板，支持组件化视觉叙事
- [ ] 扩展更多专项模板：测试用例、运维手册、发布计划、事故复盘
- [ ] 为模板增加自动校验工具，检查 Frontmatter、占位符和索引一致性
- [ ] 为 CLI 增加更完整的 doctor/update 诊断体验

---

## 7. 许可证与致谢（License & Acknowledgements）

当前仓库根目录尚未提供独立 `LICENSE` 文件；`TMLSPEC-cli/package.json` 中声明 CLI 包使用 MIT License。使用、转载或二次分发本仓库内容前，请以维护者后续补充的根许可证为准。

**致谢：**

- 所有在 AI Agent 协作、Spec-Driven Development 和团队知识工程里持续探索的人
- [OpenSpec](https://github.com/Fission-AI/OpenSpec) 提供的结构化 AI 编码工作流启发
- README 视觉组件生态：shields.io、capsule-render、readme-typing-svg、Star History
