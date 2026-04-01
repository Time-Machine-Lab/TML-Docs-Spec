## Why

Currently, `tml-spec init` generates a local `contract` folder containing numerous markdown templates. However, since the `tml-docs-spec-generate` skill can now dynamically fetch templates online, local templates have become redundant and hard to maintain. 
Additionally, the initialization process for `OpenSpec` (a separate tool) requires similar user inputs (IDE selection, project path). By integrating OpenSpec's installation and initialization directly into `tml-spec init`, we can provide a seamless, one-click setup experience. Finally, automatically scaffolding a standardized `docs` directory structure ensures immediate structural compliance for new projects.

## What Changes

- **Remove local templates**: Completely remove the creation and bundling of the `contract` folder during the `init` process.
- **Integrate OpenSpec**: Check if `@fission-ai/openspec` is installed globally. If not, install it. Then, silently execute `openspec init` using the already collected IDE and project path parameters to avoid redundant prompts.
- **Fetch online skills**: Dynamically download the `tml-docs-spec-generate` skill from the `TML-Skills` GitHub repository (e.g., using a tarball fetch or degit mechanism) and inject it into the appropriate AI IDE folder (like `.trae/skills/`), with compatibility checks for different IDEs.
- **Scaffold docs directory**: Automatically generate a standardized documentation folder structure: `docs/api`, `docs/sql`, `docs/project`, and `docs/project/domain`, placing a `.gitkeep` file in each to ensure they are tracked by Git.

## Capabilities

### New Capabilities
- `init-workflow`: A revamped initialization process that handles template removal, OpenSpec integration, dynamic GitHub skill fetching, and directory scaffolding.

### Modified Capabilities

## Impact

- The `contract/` directory and its related copying/bundling logic will be removed from the CLI.
- The core initialization logic in `src/core/init.ts` will be significantly expanded to include shell command execution (for npm install and openspec init) and network requests (for GitHub skill downloading).
- Users will experience a slightly longer but much more comprehensive initialization process that fully sets up the engineering workflow environment.