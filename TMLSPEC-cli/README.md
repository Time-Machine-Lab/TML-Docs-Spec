# TMLSPEC CLI

TMLSPEC CLI 是一个轻量初始化工具，用于向当前工作区注入项目级与需求级命令文件。

## 功能说明

- 安装 `tml-spec` 命令
- 执行 `tml-spec init` 选择目标工具
- 向对应工具目录下的 `tml-spec/` 子目录注入 `project` 与 `requirement` 两个命令文件
- 将打包内置的 `contract/` 模板目录复制到目标项目根目录

## 快速开始

推荐按下面步骤使用。

### 前置要求

在使用 `tml-spec` 生成项目级文档前，请先在你的 AI/IDE 环境中安装 TML-Skills 中的 `tml-docs-spec-generate` skill，确保生成的 `project` 命令可以正确路由到对应文档生成能力。

### 方式一：在目标项目中直接使用

1. 确认本机 Node.js 版本不低于 18.18。
2. 配置 `@tml` 私有源：

```bash
npm config set "@tml:registry=https://mxeutgbf.cn-hk1.rainapp.top/"
```

3. 全局安装 CLI：

```bash
npm install -g @tml/tmlspec-cli
```

4. 进入你要初始化命令文件的项目目录：

```bash
cd your-project
```

5. 执行初始化命令：

```bash
tml-spec init
```

6. 根据交互提示完成配置：

- 选择要注入命令的工具，如 Claude Code、GitHub Copilot、Gemini CLI、Codex。
- 选择命令文件写入的目标目录。
- 决定是否覆盖已有文件。

7. 初始化完成后，到对应工具目录下的 `tml-spec/` 子目录使用生成的 `project` 和 `requirement` 命令文件。
8. 在目标项目根目录查看自动复制的 `contract/` 模板目录。
9. 在模型会话输入框中输入/tml-spec xxx调用对应的命令

### 方式二：在仓库中本地开发和调试

1. 进入 CLI 子项目目录：

```bash
cd TMLSPEC-cli
```

2. 安装依赖：

```bash
npm install
```

3. 编译源码：

```bash
npm run build
```

4. 执行本地初始化：

```bash
node ./bin/tml-spec.js init
```

5. 如果希望直接指定目标项目和工具，也可以使用非交互参数：

```bash
node ./bin/tml-spec.js init --project-root ../your-project --tools claude,github-copilot --force
```

参数说明：

- `--project-root`：指定命令文件写入的目标项目目录。
- `--tools`：指定要生成命令的工具，多个值用英文逗号分隔。
- `--force`：覆盖已存在的命令文件。

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

- `contract/`（复制到目标项目根目录）
- `.claude/commands/tml-spec/project.md`
- `.claude/commands/tml-spec/requirement.md`
- `~/.codex/prompts/tml-spec-project.md`
- `~/.codex/prompts/tml-spec-requirement.md`
- `.github/prompts/tml-spec/tml-spec-project.prompt.md`
- `.github/prompts/tml-spec/tml-spec-requirement.prompt.md`
- `.trae/commands/tml-spec/project.md`
- `.trae/commands/tml-spec/requirement.md`
- Cursor、Gemini CLI、OpenCode 对应目录下的 `tml-spec/` 子目录中的同名命令文件

## 命令路由

- `tml-spec` 命名空间下的 `project`：项目级文档入口，默认路由到 `tml-docs-spec-generate`
- `tml-spec` 命名空间下的 `requirement`：需求级入口，默认路由到 `openspec`，并要求参考已有的项目级规范文档，如开发规范、架构设计、领域设计等

## 开发说明

- 命令源文件位于 `src/core/commands/`
- 运行时由 `src/core/command-files.ts` 读取对应 Markdown 内容
- 如需调整命令文案，直接修改 `src/core/commands/project.md` 与 `src/core/commands/requirement.md`
