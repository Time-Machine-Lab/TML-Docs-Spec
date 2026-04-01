# TMLSPEC CLI

TMLSPEC CLI 是一个轻量初始化工具，用于向当前工作区注入项目级与需求级命令文件。

## 功能说明

- 安装 `tml-spec` 命令
- 执行 `tml-spec init` 选择目标工具
- 向对应工具目录注入 `project` 与 `requirement` 两个命令文件

## 快速开始

```bash
npm install
npm run build
node ./bin/tml-spec.js init
```

发布后可从指定 Verdaccio 源全局安装：

```bash
npm config set "@tml:registry=https://mxeutgbf.cn-hk1.rainapp.top/"
npm install -g @tml/tmlspec-cli
tml-spec init
```

建议保留默认公共源，让第三方依赖继续从 npm 官方源下载：

```bash
npm config set registry https://registry.npmjs.org/
```

如果希望直接写入 .npmrc，也可以使用：

```ini
registry=https://registry.npmjs.org/
@tml:registry=https://mxeutgbf.cn-hk1.rainapp.top/
```

## 生成结果

- `.claude/commands/project.md`
- `.claude/commands/requirement.md`
- `.codex/prompts/project.md`
- `.codex/prompts/requirement.md`
- `.github/prompts/project.prompt.md`
- `.github/prompts/requirement.prompt.md`
- `.trae/commands/project.md`
- `.trae/commands/requirement.md`
- Cursor、Gemini CLI、OpenCode 对应目录下的同名命令文件

## 命令路由

- `project`：项目级文档入口，默认路由到 `tml-docs-spec-generate`
- `requirement`：需求级入口，默认路由到 `openspec`，并要求参考已有的项目级规范文档，如开发规范、架构设计、领域设计等

## 开发说明

- 命令源文件位于 `src/core/commands/`
- 运行时由 `src/core/command-files.ts` 读取对应 Markdown 内容
- 如需调整命令文案，直接修改 `src/core/commands/project.md` 与 `src/core/commands/requirement.md`