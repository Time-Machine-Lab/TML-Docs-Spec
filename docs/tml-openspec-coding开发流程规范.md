# TML-OpenSpec 开发流程规范

> **一句话概括**：基于 TML-Docs-Spec 和 OpenSpec 的 AI 辅助编码标准流程，确保人与 AI 在同一个上下文中协作。

---

## 快速参考

### 🎯 核心原则

| 原则 | 说明 |
|:----|:----|
| **文档先行** | API 和 SQL 必须先定义在 `docs/` 中，再开发代码 |
| **顶层文档是真理** | `docs/api/*.yaml` 和 `docs/sql/*.sql` 是唯一的权威数据源 |
| **顺序约束** | API/SQL 更新 → 业务代码开发（不能跳过前者） |

### 🔄 流程速查

```
新项目  →  项目立项  →  顶层文档设计  →  需求开发
                          ↓
                    docs/
                    ├── api/    ← API 定义
                    ├── sql/     ← 表结构定义
                    ├── design/ ← 架构设计
                    └── spec/   ← 开发规范
```

---

## 0. 触发条件

**什么时候用这个流程？**
- 🆕 新项目立项时
- ➕ 新需求进入开发阶段时

**谁需要遵守？**
- 所有使用 AI Agent（如 OpenSpec）协助开发的团队成员

---

## 1. 全局红线（绝对不能碰）

### ✅ 必须做

| 动作 | 要求 |
|:----|:----|
| **文档输出** | 必须使用tml-docs-spec-generate skill生成TML规范化文档 |
| **前置更新** | 涉及存储/接口变更时，**必须先更新 API/SQL 文档**，再开发业务代码 |
| **遵守规范** | `openspec-apply` 时，Agent 必须读取 `docs/spec/` 下的开发规范 |

### ❌ 禁止做

| 动作 | 后果 |
|:----|:----|
| 无项目概念文档就开始开发 | ❌ 拒绝进入设计和开发阶段 |
| 绕过顶层文档凭空生成代码 | ❌ 立即中断，修正文档后重来 |

---

## 2. 五阶段详解

### Stage 1️⃣：项目立项

**做什么**：编写项目概念文档（Project_Pitch_Spec）

**输出位置**：`docs/项目概念文档.md`

**检查清单**：
- [ ] 项目背景和目标清晰
- [ ] 核心功能和价值主张明确
- [ ] 初步技术栈选型

**Gate**：✅ 存在项目概念文档 → 进入 Stage 2；❌ 无文档 → 打回

---

### Stage 2️⃣：顶层文档设计

**做什么**：在正式开发前，先把设计文档写好

**输出位置**：
```
docs/
├── design/           ← 架构设计文档
│   └── domain/      ← 领域设计文档
├── api/             ← 接口定义 (.yaml)
├── sql/             ← 表结构 (.sql)
└── spec/            ← 开发规范
```

**检查清单**：
- [ ] 架构设计文档完成
- [ ] API 文档完成（OpenAPI 3.0 格式）
- [ ] SQL 表结构文档完成
- [ ] 开发规范文档完成

**Gate**：✅ 顶层文档就绪 → 进入 Stage 3

---

### Stage 3️⃣：需求探讨（Explore）

**做什么**：用 `openspec-explore` 探索需求

**必须挂载的上下文**：
```
- docs/design/*.md       ← 架构设计
- docs/api/*.yaml       ← API 文档
- docs/sql/*.sql        ← 数据库设计
```

**检查清单**：
- [ ] 需求边界清晰
- [ ] 技术可行性确认
- [ ] 潜在风险已识别

**Gate**：✅ 需求边界清晰 → 进入 Stage 4

---

### Stage 4️⃣：提案生成（Propose）

**做什么**：用 `openspec-propose` 生成变更提案

**⚠️ 关键约束**：如果需求涉及存储/接口变更

```
必须先生成/更新：
1. docs/sql/*.sql   ← 先更新表结构
2. docs/api/*.yaml  ← 再更新接口定义
3. 然后才能生成业务代码任务
```

**检查清单**：
- [ ] proposal.md 生成
- [ ] specs/ 规格说明生成
- [ ] tasks.md 任务清单生成
- [ ] **API/SQL 文档同步更新**（如有变更）

**Gate**：✅ 提案完整 + API/SQL 同步 → 进入 Stage 5；❌ 缺少 API/SQL 前置任务 → 打回

---

### Stage 5️⃣：代码开发（Apply）

**做什么**：用 `openspec-apply` 执行任务

**必须挂载的上下文**：
```
- docs/spec/*.md        ← 开发规范（必须读取）
- openspec/changes/<name>/
    ├── proposal.md     ← 提案
    ├── specs/          ← 规格
    └── tasks.md        ← 任务清单
```

**检查清单**：
- [ ] 所有 tasks 完成
- [ ] 代码符合 `docs/spec/` 规范
- [ ] 单元测试通过

**Gate**：✅ 所有任务完成 → 可以 Archive

---

## 3. 异常处理

### 🔴 AI 幻觉或代码偏离规范

**症状**：
- Agent 生成的代码未遵守 `docs/spec/` 规范
- Agent 凭空捏造了 API/SQL 结构

**处理流程**：
```
1. 立即中断 openspec-apply
2. 检查 docs/ 中的文档是否缺失或歧义
3. 补充/修正顶层文档
4. 重新 openspec-explore 澄清上下文
5. 重新 openspec-propose
```

### 🔴 架构冲突

**症状**：需求探讨时发现当前架构无法支撑

**处理流程**：
```
1. 挂起当前需求
2. 发起针对 docs/design/ 或 docs/sql/ 的变更流程
3. 完成架构调整后，再继续原需求
```

---

## 4. 工具链与上下文速查表

| 阶段 | 命令 | 必须挂载的上下文 | 产出 |
|:----|:----|:------------|:----|
| 需求探讨 | `openspec-explore` | `docs/design/` + `docs/api/` + `docs/sql/` | 需求边界、技术可行性 |
| 提案生成 | `openspec-propose` | 探讨结论 + 当前 SQL/API | 变更提案 + **更新的 API/SQL** |
| 代码开发 | `openspec-apply` | `docs/spec/` + 变更提案 | 实现代码 + 单元测试 |
| 结果验证 | `openspec-verify` | 实现代码 + 提案 | 验证报告 |
| 归档变更 | `openspec-archive` | 完成的所有 artifacts | 归档目录 + 主规格同步 |

---

## 5. 决策树

```
开始新需求
    │
    ▼
是否有顶层文档？
    │
    ├── 否 → 先完成 Stage 1 + Stage 2
    │         │
    │         ▼
    │     顶层文档就绪？
    │         │
    │         ├── 否 → 继续完善文档
    │         └── 是 → 继续
    │
    └── 是 → 继续
    │
    ▼
进入 Stage 3 (Explore)
    │
    ▼
需求涉及 API/SQL 变更？
    │
    ├── 是 → 必须先更新 docs/api/ 和 docs/sql/
    │         │
    │         ▼
    │     文档更新完成？
    │         │
    │         ├── 否 → 继续完善文档
    │         └── 是 → 继续
    │
    └── 否 → 继续
    │
    ▼
进入 Stage 4 (Propose) → Stage 5 (Apply)
```

---

## 6. 文档位置汇总

| 文档类型 | 位置 | 格式 |
|:-------|:----|:----|
| 项目概念 | `docs/` | `.md` |
| 架构设计 | `docs/design/` | `.md` |
| 领域设计 | `docs/design/domain/` | `.md` |
| API 定义 | `docs/api/` | `.yaml` (OpenAPI 3.0) |
| 表结构 | `docs/sql/` | `.sql` (PostgreSQL) |
| 开发规范 | `docs/spec/` | `.md` |
