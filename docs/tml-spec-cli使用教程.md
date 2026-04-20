# tml-spec-cli使用教程

## 1. 你会得到什么？

### 1.1 最终效果展示

完成本教程后，你将获得：

- 一套完整的 **AI Agent 开发工作流**，支持 Vibe Coding 和 OpenSpec 两种模式
- 标准化的 **docs 目录结构**，包含 API 文档、SQL 设计、架构设计、开发规范等顶层文档
- 一组 **AI 命令（AI Commands）**，可直接在你的 AI IDE 中调用
- 自动化的 **第三方工作流（Openspec）集成**，规范需求→提案→开发→归档的全生命周期

**预期效果**：在你的项目中执行 `tml-spec init` 后，目录结构如下（以 Cursor 为例）：

```
your-project/
├── .cursor/
│   ├── commands/
│   │   ├── tml-doctor.md
│   │   ├── tml-update.md
│   │   └── tml-covenant-sync.md
│   └── skills/
│       └── tml-docs-spec-generate/
│           └── SKILL.md
├── docs/                      # 文档根目录
│   ├── api/                   # API 接口文档 (.yaml)
│   ├── sql/                   # 数据库表结构 (.sql)
│   ├── design/                # 架构设计文档
│   └── spec/                  # 开发规范文档
└── .openspec/                 # OpenSpec 配置（OpenSpec 模式）
```

### 1.2 前置条件清单

- [ ] **操作系统**：Windows/macOS/Linux
- [ ] **Node.js**：v18.18.0 或更高版本
- [ ] **npm**：v9.0.0 或更高版本
- [ ] **AI IDE**：Claude Code / Cursor / Trae / GitHub Copilot / Gemini CLI / OpenCode / Codex 中的任意一种
- [ ] **网络**：能够访问 npm 官方源和 GitHub

## 2. 核心跑通路径

### 步骤 1：安装 TML CLI

在你的终端执行以下命令：

```bash
# 配置私有源（如需要）
npm config set "@tml:registry=https://mxeutgbf.cn-hk1.rainapp.top/"

# 全局安装 TML CLI
npm install -g @tml/tmlspec-cli

# 验证安装
tml-spec --version
```

**预期结果**：终端输出当前版本号（如 `0.6.0`）

---

### 步骤 2：进入项目目录并初始化

```bash
# 进入你的项目目录
cd your-project

# 执行初始化命令（交互式）
tml-spec init
```

**预期结果**：显示 TML 动画徽标，按 Enter 继续后进入交互式问答

---

### 步骤 3：选择目标目录

```
? Where should the spec workspace be initialized? (Use arrow keys)
❯ /path/to/current/directory
  /path/to/your-project
  /custom/path
```

**操作**：直接按 Enter 使用当前目录，或输入自定义路径

---

### 步骤 4：选择 AI IDE

```
? Select IDE (Use arrow keys)
❯ Claude Code (.claude/commands/)
  Cursor (.cursor/commands/)
  GitHub Copilot (.github/prompts/)
  Gemini CLI (.gemini/commands/)
  OpenCode (.opencode/commands/)
  Codex (.codex/prompts/)
  Trae (.trae/commands/)
```

**操作**：使用方向键选择你正在使用的 AI IDE（单选）

---

### 步骤 5：安装 TML commands（自动）

选择 IDE 后，CLI 会自动安装 TML 公共命令组件（`tml-doctor` / `tml-update` / `tml-covenant-sync`）。

如果目标文件已存在，会出现覆盖确认：

```
? Overwrite files if they already exist? (y/N)
```

---

### 步骤 6：安装 TML skills（自动）

CLI 会自动从 `https://github.com/Time-Machine-Lab/TML-Skills` 安装默认技能 `tml-docs-spec-generate` 到所选 IDE 对应目录下的 `skills/`。

---

### 步骤 7：选择 AI Coding 模式

```
? Select AI Coding Mode (Use arrow keys)
❯ Vibe Coding (Lightweight, no OpenSpec installation)
  OpenSpec (Structured workflow, installs OpenSpec)
```

**操作**：
- 选择 **Vibe Coding**：轻量模式，仅生成 docs 结构和你选择的 AI 命令
- 选择 **OpenSpec**：完整模式，额外安装 OpenSpec 并初始化完整的工作流

---

### 步骤 8：等待初始化完成

**预期输出**：

```
✨ TML Workspace Setup Complete! 🎉

安装 TML commands...
TML commands 安装完成 (created: 3, skipped: 0)
安装 TML skills...
安装 tml-docs-spec-generate (https://github.com/Time-Machine-Lab/TML-Skills)...
TML skills 安装完成: tml-docs-spec-generate

Generated files (示例):
- .cursor/commands/tml-doctor.md
- .cursor/commands/tml-update.md
- .cursor/commands/tml-covenant-sync.md
- .cursor/skills/tml-docs-spec-generate/SKILL.md
- docs/api/
- docs/sql/
- docs/design/
- docs/spec/
```

---

### 步骤 9：（仅 OpenSpec 模式）同步 TML 规约

OpenSpec 初始化完成后，在 AI 会话中执行：

```
/tml-covenant-sync
```

**预期结果**：AI 自动将 TML-Spec-Coding 规约注入到 `.openspec.yaml` 配置文件中

---

## 3. TML AI 命令大全

### 3.1 命令速查表

| 命令名称 | 调用方式 | 适用场景 | 功能说明 |
|:------|:-------|:-------|:-------|
| `tml-doctor` | `/tml-doctor` | 环境诊断 | 检测 tml-spec 配置和依赖状态，提供修复建议 |
| `tml-update` | `/tml-update` | 版本检查 | 检查 CLI 及配置是否为最新版本，协助更新 |
| `tml-covenant-sync` | `/tml-covenant-sync` | 契约同步 | 将 TML 公共知识同步至第三方 AI Coding 模式的配置中 |

### 3.2 tml-doctor 命令详解

**调用方式**：在 AI 会话输入框中输入 `/tml-doctor`

**功能**：
- 检查当前项目的 tml-spec 配置状态
- 验证 docs 目录结构是否完整
- 检测依赖工具是否正确安装
- 提供修复建议和最佳实践指导

**典型输出**：
```
[检查中] TML Spec 配置...
✓ .claude/commands/ 目录存在
✓ docs/ 目录结构完整
✓ tml-covenant-sync.md 命令已加载
[建议] 建议定期执行 /tml-update 检查更新
```

### 3.3 tml-update 命令详解

**调用方式**：在 AI 会话输入框中输入 `/tml-update`

**功能**：
- 检查 `@tml/tmlspec-cli` 最新版本
- 对比本地版本与最新版本
- 提供更新指导

**典型输出**：
```
当前版本: 0.6.0
最新版本: 0.6.0
[建议] 执行以下命令更新:
npm install -g @tml/tmlspec-cli@latest
```

### 3.4 tml-covenant-sync 命令详解

**调用方式**：在 AI 会话输入框中输入 `/tml-covenant-sync`

**前置条件**：项目已选择 OpenSpec 模式初始化

**功能**：
- 自动识别当前使用的 AI Coding 模式
- 将 TML 公共知识（Public Knowledge）同步到目标框架的配置中
- 配置内容包括：
  - `project_context`：docs/design、docs/spec 路径映射
  - `rules`：Explore/Propose/Apply 阶段约束

**支持的 AI Coding 模式**：
- OpenSpec（`.openspec.yaml` / `config.yaml`）
- 其他框架可扩展

---

## 4. TML Docs 目录结构详解

```
docs/                          # 文档根目录（Single Source of Truth）
├── api/                       # API 接口文档目录
│   ├── *.yaml                 # OpenAPI 格式的接口定义文件
│   └── example: user_api.yaml # 用户模块 API 文档示例
│
├── sql/                       # 数据库表结构目录
│   ├── *.sql                  # PostgreSQL 格式的 DDL 文件
│   └── example: user.sql      # 用户表结构示例（含索引、初始数据）
│
├── design/                    # 架构设计文档目录
│   └── *.md                   # 顶层架构设计文档
│
└── spec/                      # 开发规范文档目录
    ├── *.md                   # 技术栈规范、代码风格规范等
    └── example: 前端开发规范.md
```
### 4.1 docs 目录结构总览

| 目录 | 用途 | 规范要求 |
|:-----|:-----|:---------|
| `docs/api/` | API 接口文档 | 必须使用 OpenAPI 3.0 格式（`.yaml`） |
| `docs/sql/` | 数据库表结构 | 必须使用 PostgreSQL DDL 语法（`.sql`） |
| `docs/design/` | 架构设计 | 架构文档统一存放在该目录下 |
| `docs/spec/` | 开发规范 | Agent 开发前必须遵守的编码约束 |

### 4.2 docs/sql/ — 数据库表结构

| 项目 | 说明 |
|:-----|:-----|
| **存放内容** | `.sql` 文件（DDL 脚本） |
| **核心定位** | 项目存储层的**顶层权威** |
| **规范约束** | 所有表结构变更**必须先**在此定义，代码实现以此为准 |
| **命名示例** | `user.sql`（用户表）、`order.sql`（订单表） |
| **示例内容** | 表结构 + 索引 + 初始数据 |

> ⚠️ **红线**：严禁在 `docs/sql/` 之外定义或修改数据库结构。

### 4.3 docs/api/ — API 接口文档

| 项目 | 说明 |
|:-----|:-----|
| **存放内容** | `.yaml` 文件（OpenAPI 规范） |
| **核心定位** | API 设计的**顶层权威** |
| **规范约束** | 所有接口变更**必须先**在此定义，代码生成以此为准 |
| **命名示例** | `user_api.yaml`、`order_api.yaml` |
| **示例内容** | RESTful 接口定义、参数校验、响应格式 |

> ⚠️ **红线**：严禁在 `docs/api/` 之外定义或修改 API 接口。

### 4.4 docs/design/ — 架构设计

| 项目 | 说明 |
|:-----|:-----|
| **存放内容** | `.md` 文件（Markdown 文档） |
| **核心定位** | 项目架构与模块划分的**顶层权威** |
| **规范约束** | 所有需求开发不能偏离此目录下的架构设计 |
| **目录结构** | 所有架构与模块设计文档统一存放在 `docs/design/` |
| **命名示例** | `系统架构设计.md`、`用户模块设计.md` |

### 4.5 docs/spec/ — 开发规范

| 项目 | 说明 |
|:-----|:-----|
| **存放内容** | `.md` 文件（开发规约） |
| **核心定位** | Agent 代码生成的**行为约束** |
| **规范约束** | `openspec-apply` 阶段 Agent **必须读取**此目录 |
| **命名示例** | `前端开发规范.md`、`后端开发规范.md`、`安全规范.md` |
| **示例内容** | 技术栈约束、代码风格、错误处理、安全要求 |

---

## 5. 第三方工作流进阶集成

### 5.1 Openspec

OpenSpec 是一个基于 Spec-Driven Development (SDD) 的 AI 编码辅助框架，提供结构化的需求→提案→开发→归档工作流。

**官方文档**：https://github.com/Fission-AI/OpenSpec

#### ① OpenSpec 核心命令

| 命令 | 功能 | 使用场景 |
|:----|:----|:-------|
| `/openspec:explore` | 需求探索 | 探讨需求边界和技术可行性 |
| `/openspec:propose` | 提案生成 | 生成变更提案、规格说明、任务清单 |
| `/openspec:apply` | 任务执行 | 执行 tasks.md 中的任务 |
| `/openspec:verify` | 结果验证 | 验证实现是否符合提案 |
| `/openspec:archive` | 归档变更 | 归档已完成变更，同步规格到主规格 |
| `/openspec:onboard` | 新手引导 | 了解 OpenSpec 工作流 |

#### ② TML + OpenSpec 工作流
```
需求探讨 (Explore)     →  挂载 docs/design/, docs/api/, docs/sql/
     ↓
提案生成 (Propose)     →  先生成/更新 API/SQL，再生成业务代码任务
     ↓
任务执行 (Apply)       →  挂载 docs/spec/ 开发规范
     ↓
结果验证 (Verify)      →  确保代码符合规范
     ↓
归档变更 (Archive)     →  同步到 openspec/specs/
```
---

## 6. 常见问题

### 6.1 常见坑点避雷

| 坑点 | 说明 | 解决方案 |
|:----|:----|:-------|
| 初始化时目录已存在 | 某些文件可能已存在导致跳过 | 使用 `--force` 参数覆盖 |
| OpenSpec 安装失败 | 网络问题或权限不足 | 检查 npm 源配置，使用管理员权限 |
| AI 命令不生效 | 命令文件路径问题 | 确认 AI IDE 支持该命令目录格式 |
| docs 结构不完整 | 初始化被中断 | 删除后重新执行 `tml-spec init` |

### 6.2 典型错误与解法

**Q: 执行 `tml-spec init` 报错 `command not found`**

**A**: TML CLI 未正确安装。请执行：
```bash
npm install -g @tml/tmlspec-cli
# 验证
tml-spec --version
```

---

**Q: OpenSpec 初始化报错 `openspec: command not found`**

**A**: OpenSpec 未安装。TML CLI 会自动检测并安装，但如果安装失败，请手动执行：
```bash
npm install -g @fission-ai/openspec@latest
```

---

**Q: AI 命令（如 `/tml-doctor`）没有任何响应**

**A**: 不同 AI IDE 的命令调用方式不同：
- **Claude Code**: 直接输入 `/tml-doctor`
- **Cursor**: 在 Command Panel (Cmd+K) 中搜索 `tml-doctor`
- **Trae**: 在命令面板中搜索 `tml-doctor`
- **GitHub Copilot**: 输入 `/tml-doctor` 后按 Tab 补全

---

**Q: 如何更新 TML CLI 到最新版本？**

**A**: 执行以下命令：
```bash
npm install -g @tml/tmlspec-cli@latest
# 或使用 tml-update 命令
tml-spec init  # 在 AI 中输入 /tml-update
```
