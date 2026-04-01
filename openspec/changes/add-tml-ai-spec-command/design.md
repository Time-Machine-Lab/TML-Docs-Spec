## Context

The TML-Spec-Coding guidelines prescribe a very specific project lifecycle (Explore -> Propose -> Apply) and mandate the use of explicit files (`docs/api/*.yaml`, `docs/sql/*.sql`) as single sources of truth. To enforce these guidelines, third-party AI assistants (like OpenSpec) need to be configured via their respective configuration files (e.g., `.openspec.yaml`). Instead of hardcoding YAML parsers and updaters in our Node.js `init` flow, we should rely on the AI Agent's capabilities. A new AI IDE command `tml-ai-spec.md` will serve as the instruction manual for the AI to update its own configuration.

## Goals / Non-Goals

**Goals:**
- Create an AI Command (`tml-ai-spec.md`) that embeds the TML-Spec-Coding rules in Chinese.
- Instruct the AI (via this command) to locate the current AI Coding Mode's configuration file (e.g., OpenSpec's config).
- Instruct the AI to optionally browse the official repository (`https://github.com/Fission-AI/OpenSpec`) if unsure of the latest configuration schema.
- Instruct the AI to inject the detailed `project_context` (including `docs/design/*.md` and `docs/spec/**/*`) and the strict, stage-specific `rules`.
- Ensure this new command is exported and placed into all supported IDE command directories during the `tml-spec init` execution.

**Non-Goals:**
- Removing or modifying the existing `tml-project.md` or `tml-requirement.md` commands.
- Forcing the CLI `init` script to manually parse or write `.openspec.yaml`.

## Decisions

- **Command Content:** The `ai-spec.md` template will contain a detailed system prompt instructing the AI to act as a "Configuration Sync Agent." It will include the precise YAML demo (in Chinese) provided by the user, covering the `project_context` explanations and the four critical rules (Global, Explore, Propose, Apply).
- **Implementation Strategy:** We will follow the established pattern in `src/core/command-files.ts` by adding a `buildAiSpecMarkdownCommand()` function, which reads `ai-spec.md`. Then, each adapter in `src/core/adapters/` will be updated to output a `tml-ai-spec.md` (or `.toml`) file alongside the existing `tml-project`, `tml-requirement`, `tml-doctor`, and `tml-update` commands.

## Risks / Trade-offs

- **[Risk] Agent Capability Dependency:** The success of this command relies entirely on the AI Agent's ability to read local files, browse the web (for OpenSpec schema), and correctly modify YAML files without breaking them.
  - **Mitigation:** The prompt in `ai-spec.md` will be written explicitly to minimize ambiguity, providing the exact YAML block to be injected. The instruction to browse GitHub acts as a fallback for schema verification.