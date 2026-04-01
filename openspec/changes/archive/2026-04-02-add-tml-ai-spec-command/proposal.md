## Why

The current implementation lacks a dedicated, robust way to sync the TML-Spec-Coding guidelines and contexts into third-party AI coding environments (like OpenSpec). Trying to hardcode `.openspec.yaml` mutations during the `init` phase is fragile because configuration filenames and structures of external tools may change over time. By creating a dedicated `tml-ai-spec.md` IDE command, we can leverage the AI Agent itself to intelligently read the target environment's rules, understand the third-party configuration formats (e.g., by referencing their documentation), and inject our TML guidelines gracefully.

## What Changes

- **Add New IDE Command**: Create a new command file `src/core/commands/ai-spec.md`.
- **Command Content**: This command will instruct the AI Agent to:
  1. Detect the current AI Coding Mode (or accept one via arguments like `/tml-ai-spec [AI Coding Mode]`).
  2. For `openspec` mode, read the local OpenSpec configuration files (e.g., `.openspec.yaml` or `config.yaml`).
  3. Optionally browse `https://github.com/Fission-AI/OpenSpec` to learn the latest configuration schema.
  4. Inject a highly detailed, Chinese-language TML-Spec-Coding ruleset and context configuration (covering `docs/design/` and `docs/spec/` as contexts, and strict lifecycle rules for Explore, Propose, and Apply phases) into the target configuration file.
- **Update CLI Exporters**: Modify `src/core/command-files.ts` to export `buildAiSpecMarkdownCommand()`.
- **Update Adapters**: Update all IDE adapters (e.g., `claude.ts`, `cursor.ts`, `gemini.ts`, etc.) to include `tml-ai-spec.md` (or `.toml` equivalent) in their generated files list.

## Capabilities

### New Capabilities
- `ai-spec-sync`: A new IDE command that allows users to dynamically sync TML-Spec-Coding rules and contexts into their active AI coding assistant's configuration file.

### Modified Capabilities
- `init-workflow`: The `init` process will now generate an additional command file (`tml-ai-spec.md`) across all supported IDEs.

## Impact

- Users will gain a powerful `/tml-ai-spec` command in their IDEs, providing a future-proof way to enforce TML standards without relying on brittle regex or AST parsing in the CLI's init script.
- The generated IDE command footprint will increase by one file per IDE.