---
name: SQL_DDL_Generation_Spec
description: 这是一个【系统指令型契约】，用于约束 Agent 如何生成纯 `.sql` 文件。本文档本身不是模板，而是生成 SQL 时的“系统提示词 (System Prompt)”。
target_file_extension: ".sql"
---

# 数据库 DDL 脚本生成规范指令

> **[Agent 极其重要的执行指令]**
> 当你被要求基于某个模块设计生成数据库表结构时，你**必须**输出一个纯文本的 `.sql` 文件，而**不能**输出 Markdown 格式的文档。
> 你的输出结果将直接被自动化工具读取并在数据库中执行。
> **关键约束**：生成的 SQL 文件**只能包含 DDL 语句**（如 CREATE TABLE、CREATE INDEX、COMMENT ON 等），**禁止包含任何 DML 语句**（如 INSERT、UPDATE、DELETE）或任何数据操作语句。

## 1. 核心生成原则 (Core Principles)
- **方言要求 (Dialect)**：必须使用标准的 PostgreSQL 语法（或根据用户在《开发规范模板》中指定的数据库方言）。
- **文件命名**：文件名**必须**与目标表名完全一致，**禁止**使用业务模块前缀或后缀。例如：
  - ✅ 正确：`user.sql`（表名为 `user`）
  - ✅ 正确：`order_item.sql`（表名为 `order_item`）
  - ❌ 错误：`init_user_module.sql`
  - ❌ 错误：`user_table.sql`
- **幂等性 (Idempotency)**：建表语句必须使用 `CREATE TABLE IF NOT EXISTS`。
- **注释要求**：每个表和每个核心字段，必须使用 `COMMENT ON` 语句添加中文业务注释。这对于后续的 AI 识别极其重要。

## 2. 字段与类型约束 (Field Constraints)
- **主键设计**：所有表的主键必须命名为 `id`，类型推荐使用 `UUID` 或 `BIGSERIAL`。
- **审计字段**：所有业务表必须默认包含以下字段：
  - `created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`
  - `updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`
- **软删除**：除非用户明确要求硬删除，否则必须包含 `is_deleted BOOLEAN DEFAULT FALSE`。
- **枚举值约束**：对于状态类字段（如 status），应该使用 `VARCHAR` 并通过 `CHECK` 约束或数据库层面的 `ENUM` 类型限制其取值范围。

## 3. 索引规范 (Index Conventions)
- 必须为主键、外键以及经常用于 `WHERE` 条件查询的字段（如 email, user_id）创建索引。
- 索引命名规范：`idx_表名_字段名`（如 `idx_users_email`）。
- 唯一索引命名规范：`uk_表名_字段名`。

## 4. 输出格式示范 (Expected Output Format)
你的最终输出**仅限于**类似下方的 SQL 代码，不要包含任何诸如“这是您要的 SQL 代码”等客套话。

```sql
-- 初始化用户模块表结构

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'banned')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE users IS '用户核心实体表';
COMMENT ON COLUMN users.id IS '用户唯一标识';
COMMENT ON COLUMN users.status IS '账户状态：active正常, suspended挂起, banned封禁';

CREATE UNIQUE INDEX IF NOT EXISTS uk_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_status ON users(status);
```