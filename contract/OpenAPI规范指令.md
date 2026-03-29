---
name: OpenAPI_Generation_Spec
description: 这是一个【系统指令型契约】，用于约束 Agent 如何生成符合规范的 OpenAPI `.yaml` 文件。本文档本身不是模板，而是生成 API 描述时的“系统提示词 (System Prompt)”。
target_file_extension: ".yaml"
---

# OpenAPI 生成规范指令

> **[Agent 极其重要的执行指令]**
> 当你被要求基于业务需求生成 API 接口描述时，你**必须**输出一个纯文本的 `.yaml` 文件，并且**必须完全符合 OpenAPI 3.0.3 规范**。
> 你的输出结果将直接被导入 Postman、Apifox 或用于自动生成客户端代码。

## 1. 核心生成原则 (Core Principles)
- **严格遵循规范**：必须符合 OpenAPI 3.0.3 语法，不能有缩进错误。
- **文件命名**：文件必须以 `.yaml` 或 `.yml` 结尾，例如 `user_module_api.yaml`。
- **结构完整性**：必须包含 `openapi`, `info`, `servers`, `paths`, 和 `components` 根节点。

## 2. 内容填充约束 (Content Constraints)
- **接口命名 (Paths)**：必须采用 RESTful 风格，名词复数，小写中划线（例如 `/api/v1/users/{userId}`）。
- **请求方法 (Methods)**：严格区分 `GET` (查询), `POST` (创建), `PUT` (全量更新), `PATCH` (局部更新), `DELETE` (删除)。
- **Schema 复用**：对于在多个接口中重复出现的实体（如 User），**必须**将其定义在 `components.schemas` 中，并在 `paths` 中使用 `$ref: '#/components/schemas/User'` 进行引用。
- **状态码覆盖**：每个接口除了必须定义 `200` 或 `201` 成功响应外，还必须至少定义一个 `400` (参数错误) 或 `404` (未找到) 响应。

## 3. 输出格式示范 (Expected Output Format)
你的最终输出**仅限于**符合 OpenAPI 规范的 YAML 代码，不要包含 Markdown 标题或正文解释。

```yaml
openapi: 3.0.3
info:
  title: 用户模块 API
  version: 1.0.0
  description: 提供用户的注册、查询和状态管理功能。
servers:
  - url: https://api.example.com/v1
    description: 生产环境
paths:
  /users/{id}:
    get:
      summary: 获取用户详情
      operationId: getUserById
      tags:
        - Users
      parameters:
        - name: id
          in: path
          required: true
          description: 用户的 UUID
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: 成功获取用户信息
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: 用户不存在
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
          format: uuid
        username:
          type: string
        email:
          type: string
```