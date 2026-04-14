---
agent_instruction: |
  这是本仓库所有可用文档模板的权威索引。当你需要生成某类文档时，先查此表找到对应模板路径，再读取该文件获取完整写作指令。
  「系统指令型契约」不产出 Markdown，而是约束 Agent 生成特定格式的工程文件（如 .sql、.yaml）。
maintainer_note: |
  每当向 contract/ 目录新增模板时，在下方表格末尾追加一行。
  name 字段须与模板文件 YAML Frontmatter 中的 name 字段完全一致。
  文件路径格式：contract/文件名.md
---

| name | 文件路径 | 类型 | 适用场景 |
|------|----------|------|----------|
| `Project_Pitch_Spec` | `contract/项目概念介绍模板.md` | 文档模板 | 对外/对内讲解项目概念，说明「是什么」和「为什么做」，遵循黄金圈理论，不涉及技术细节。 |
| `GitHub_README_Spec` | `contract/Github项目README模板.md` | 文档模板 | 为 GitHub 开源仓库生成结构清晰、吸引人的 README，覆盖项目简介、快速启动、功能说明、贡献指南等章节。 |
| `Architecture_Design_Spec` | `contract/架构设计模板.md` | 文档模板 | 系统顶层架构设计，聚焦权衡、边界和数据流，采用裁剪版 4+1 视图，不涉及具体 API 参数或代码规范。 |
| `Domain_Module_Design_Spec` | `contract/领域模块设计模板.md` | 文档模板 | 基于 DDD 的单个业务模块详细设计，含限界上下文、聚合根和业务约束，使用 Mermaid 图表，不含全局架构或 API 细节。 |
| `Dev_Guidelines_Spec` | `contract/开发规范模板.md` | 文档模板 | 团队/项目级开发规范，说明「如何写代码」和「遵循什么流程」，不包含具体业务需求。 |
| `Meeting_Minutes_Spec` | `contract/会议记录模板.md` | 文档模板 | 将无序会议对话整合为结构化记录，提取结论、共识和待办事项，不逐字记录发言。 |
| `Team_Resources_Spec` | `contract/团队资源模板.md` | 文档模板 | 动态管理团队资源（账号、服务器、中间件等）的元模板，大纲由数据类型驱动生成，使用表格化管理。 |
| `Tutorial_Spec` | `contract/使用教程模板.md` | 文档模板 | 实操教程，遵循「概览层→执行层→容错层」三阶架构，强调最小可行路径，不讲底层原理。 |
| `Insight_Report_Spec` | `contract/新事物洞悉报告模板.md` | 文档模板 | 对新技术或行业动态的深度洞察报告，运用第一性原理和费曼技巧，提取对团队的落地价值。 |
| `SQL_DDL_Generation_Spec` | `contract/数据库DDL规范指令.md` | 系统指令 | 约束 Agent 生成数据库表结构，输出纯 `.sql` 文件而非 Markdown。 |
| `OpenAPI_Generation_Spec` | `contract/OpenAPI规范指令.md` | 系统指令 | 约束 Agent 生成符合 OpenAPI 3.0.3 规范的接口描述，输出纯 `.yaml` 文件。 |
| `Task_Assignment_Spec` | `contract/任务书文档模板.md` | 文档模板 | 旨在平滑移交任务，消除信息差，明确任务背景、资料库、执行细节及验收标准。 |
| `Phase_Gate_Process_Spec` | `contract/流程规范文档模板.md` | 文档模板 | 运用阶段关卡模型定义团队业务流转的生命周期，明确各阶段的触发时机、关键动作与流转关卡，避免写成操作教程。 |
| `Phase_Plan_Spec` | `contract/项目阶段性规划设计模板.md` | 文档模板 | 交代某一产品/项目在特定阶段内的功能规划、交付形态与成功标准，让团队所有角色（开发、设计、测试、AI Agent）对本期方向形成共识。遵循黄金圈理论，聚焦用户视角，不涉及任何技术实现细节。 |
