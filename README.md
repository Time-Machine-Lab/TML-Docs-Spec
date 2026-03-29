<div align="center">

  # TML-Docs-Spec

  > 团队文档规范中心 —— Multi-Agent 协作与人类团队协同的原子化文档契约库。

  [![License](https://img.shields.io/github/license/Time-Machine-Lab/TML-Docs-Spec?style=flat-square)](LICENSE)
  [![Stars](https://img.shields.io/github/stars/Time-Machine-Lab/TML-Docs-Spec?style=flat-square)](https://github.com/Time-Machine-Lab/TML-Docs-Spec/stargazers)

</div>

---

## 2. 项目概览（Overview）

**TML-Docs-Spec** 是一个专为 Multi-Agent 和人类团队协同设计的文档规范集合。它通过在 `contract/` 目录下提供一系列标准化、原子化的 Markdown 模板，确保团队输出的所有文档在结构、格式、方法论上保持高度一致。

**核心特性：**

- ✅ **原子化契约**：每个模板仅负责单一文档类型，明确边界限制，避免内容越界。
- ✅ **Agent 友好**：内置专门给 Agent 阅读的系统指令和 YAML Frontmatter，确保 AI 生成质量。
- ⚡ **无缝技能联动**：搭配 `TML-Skills` 仓库的专属能力，通过对话即可快速生成标准化文档。
- 🔒 **方法论驱动**：内置如黄金圈、DDD、SCQA 等业界最佳实践作为写作指引。

---

## 3. 快速开始（Quick Start）

如何快速使用本项目来生成规范化的 TML 文档？

### 3.1 环境要求（Prerequisites）

- [Trae IDE](https://www.trae.ai/) >= 1.0 或其他支持类似 AI Skill 的环境
- [TML-Skills 仓库](https://github.com/Time-Machine-Lab/TML-Skills) 的访问权限

### 3.2 安装（Installation）

```bash
# 推荐方式：安装文档生成技能
# 1. 前往 TML-Skills 仓库 (https://github.com/Time-Machine-Lab/TML-Skills)
# 2. 将 `tml-docs-spec-generate` 技能安装/配置到你当前的工作项目中
```

### 3.3 第一个示例（Hello World）

在 IDE 或 AI 对话框中，直接向 Agent 发送如下指令唤起技能：

```markdown
调用 tml-docs-spec-generate 技能。
模板：Project_Pitch_Spec
内容：帮我写一份“新一代文档管理系统”的概念介绍。核心解决当前团队文档散落各处、AI 难以准确理解上下文的痛点，目标是提供一个对人和 Agent 双重友好的集中式规范库。
```

预期输出：Agent 将自动读取对应的概念介绍模板，结合黄金圈法则，为你生成一份结构完整、包含“是什么”、“为什么做”的 Markdown 文档。

---

## 4. 功能详情（Features & Documentation）

当前仓库提供多种原子化模板，涵盖项目设计、开发、会议记录等不同生命周期。完整且最新的模板清单与适用场景，请查阅 [**CONTRACT_INDEX.md**](CONTRACT_INDEX.md)。

### 4.1 功能列表（Feature Matrix）

| 功能模板名称 | 说明 | 文档链接 |
|------------|------|----------|
| `Project_Pitch_Spec` | 对外/对内讲解项目概念，说明「是什么」和「为什么做」 | [模板](contract/项目概念介绍模板.md) |
| `GitHub_README_Spec` | 开源仓库结构清晰的 README | [模板](contract/Github项目README模板.md) |
| `Architecture_Design_Spec` | 系统顶层架构设计，聚焦权衡、边界和数据流 | [模板](contract/架构设计模板.md) |
| `Domain_Module_Design_Spec` | 基于 DDD 的单个业务模块详细设计 | [模板](contract/领域模块设计模板.md) |
| `Dev_Guidelines_Spec` | 团队/项目级开发规范 | [模板](contract/开发规范模板.md) |
| `Meeting_Minutes_Spec` | 提取无序会议的结论、共识和待办事项 | [模板](contract/会议记录模板.md) |
| `Team_Resources_Spec` | 动态管理团队资源（账号、服务器、中间件等） | [模板](contract/团队资源模板.md) |
| `Tutorial_Spec` | 实操教程，强调最小可行路径 | [模板](contract/使用教程模板.md) |
| `Insight_Report_Spec` | 新技术或行业动态的深度洞察报告 | [模板](contract/新事物洞悉报告模板.md) |
| `SQL_DDL_Generation_Spec`| 约束 Agent 生成数据库表结构 (.sql) | [指令](contract/数据库DDL规范指令.md) |
| `OpenAPI_Generation_Spec`| 约束 Agent 生成符合 OpenAPI 3.0.3 的接口描述 (.yaml) | [指令](contract/OpenAPI规范指令.md) |

---

## 5. 贡献指南（Contributing）

欢迎为 TML-Docs-Spec 贡献新的文档规范模板！我们同样提供了专属技能来帮助你自动生成符合要求的模板。

**如何生成新的文档模板？**

在当前 `TML-Docs-Spec` 仓库下，你可以直接使用 `tml-spec-doc-template-create` 技能来生成标准化的模板文件。

**生成示例：**

```markdown
调用 tml-spec-doc-template-create 技能。
模板名称：Bug_Report_Spec
需求：帮我创建一个用于提交 Bug 报告的文档模板。
要求包含：Bug 描述、复现步骤、预期行为、实际行为、环境信息。其中复现步骤和环境信息是必填项。
```

预期结果：Agent 会自动在 `contract/` 目录下创建一个包含标准 YAML Frontmatter（定义 required、description 等规则）的 `Bug报告模板.md`，并在 `CONTRACT_INDEX.md` 中追加相应的索引记录。

**提交 PR 流程：**

1. 基于 `main` 创建特性分支：`git checkout -b feat/your-new-template`
2. 确保你的模板文件放置在 `contract/` 目录下，并更新了 `CONTRACT_INDEX.md`
3. 遵循 [Conventional Commits](https://www.conventionalcommits.org/) 提交规范：
   ```text
   feat(template): 新增 Bug_Report_Spec 模板
   docs(index): 更新 CONTRACT_INDEX 索引
   ```
4. 发起 Pull Request，清晰描述该模板解决的具体场景和价值

---

## 6. 路线图（Roadmap）

- [x] 核心项目设计类文档模板（概念、架构、DDD）
- [x] 开发阶段约束类模板（规范、代码生成指令）
- [ ] 🔄 更多专项场景模板（如：测试用例、运维手册等）（进行中）
- [ ] 自动化校验工具，检查生成的文档是否完全符合 Frontmatter 规范

> 查看完整列表：[CONTRACT_INDEX.md](CONTRACT_INDEX.md)

---

## 7. 许可证与致谢（License & Acknowledgements）

本项目基于 [MIT License](LICENSE) 开源。

**致谢：**
- 所有致力于提升 Multi-Agent 协作效率的探索者与贡献者们 ❤️