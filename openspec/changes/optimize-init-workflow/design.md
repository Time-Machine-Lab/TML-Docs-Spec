## Context

Currently, `tml-spec init` handles injecting local configuration files and placing numerous local Markdown templates into a `contract` directory within the target project. To reduce maintenance overhead and enhance the project's initialization capabilities, we need to integrate OpenSpec and leverage the `tml-docs-spec-generate` skill to dynamically fetch online templates. Furthermore, we must automatically scaffold a standardized `docs` directory structure for the project.

## Goals / Non-Goals

**Goals:**
- Remove the local `contract` template handling logic entirely.
- Automatically detect and globally install `@fission-ai/openspec` if it's missing.
- Execute `openspec init` silently within the Node.js process, reusing the parameters (IDE and project path) collected during the `tml-spec init` prompts.
- Download the `tml-docs-spec-generate` skill from GitHub and inject it into the target IDE's configuration (for IDEs that support Skills/Rules).
- Automatically generate a standard `docs` directory structure (`docs/api`, `docs/sql`, `docs/project`, `docs/project/domain`) and add a `.gitkeep` file to each empty folder.

**Non-Goals:**
- Do not alter the structure of the already generated command files (`project.md` / `requirement.md`).
- Do not attempt complex injection logic for IDEs that lack native Skill/Rules support (e.g., GitHub Copilot or Claude Code) beyond basic prompt commands. We will simply bypass or log an info message for them regarding the skill installation.

## Decisions

- **OpenSpec Invocation:** Use Node.js `child_process.execSync` to silently call `openspec init` with command-line arguments like `--ide` and `--dir` to bypass interactive prompts.
- **Skill Download Mechanism:** Since we only need a specific subdirectory (`skills/tml-docs-spec-generate`) from the `TML-Skills` repository, we will use a lightweight fetch mechanism (such as using GitHub API or a simple tarball extraction) to download just that folder. This is much faster and cleaner than running `git clone` on the entire monolithic repository.
- **Docs Scaffolding:** Use `fs.mkdirSync(dir, { recursive: true })` to quickly generate the required folder structure, followed by `fs.writeFileSync(path.join(dir, '.gitkeep'), '')` to ensure the folders are tracked by version control.

## Risks / Trade-offs

- **[Risk] Network Connectivity Issues:** If the user's network cannot access npm (to install openspec) or GitHub (to fetch the skill), the initialization process will fail. 
  - **Mitigation:** Implement appropriate timeouts and provide clear, actionable error messages suggesting manual installation or retry.
- **[Risk] IDE Compatibility:** Certain IDEs may not support the concept of a standalone "Skill" directory.
  - **Mitigation:** Implement an allowlist or compatibility check within the adapter logic. Only download and place the skill for IDEs that explicitly support it (like Trae or Cursor). For others, log a message indicating that the skill feature is not natively supported by their chosen IDE.