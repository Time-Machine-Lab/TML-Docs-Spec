## 1. Command Template Creation

- [x] 1.1 Create `src/core/commands/ai-spec.md` with the detailed system prompt and Chinese TML-Spec-Coding YAML configuration block as approved by the user.

## 2. Command Exporter Update

- [x] 2.1 Update `src/core/command-files.ts` to export `buildAiSpecMarkdownCommand()`, which reads `ai-spec.md`.

## 3. Adapters Update

- [x] 3.1 Update `src/core/adapters/claude.ts` to generate `tml-ai-spec.md`.
- [x] 3.2 Update `src/core/adapters/cursor.ts` to generate `tml-ai-spec.md`.
- [x] 3.3 Update `src/core/adapters/gemini.ts` to generate `tml-ai-spec.toml` (using `buildGeminiTomlCommand`).
- [x] 3.4 Update `src/core/adapters/github-copilot.ts` to generate `tml-ai-spec.prompt.md`.
- [x] 3.5 Update `src/core/adapters/opencode.ts` to generate `tml-ai-spec.md`.
- [x] 3.6 Update `src/core/adapters/codex.ts` to generate `tml-ai-spec.md`.
- [x] 3.7 Update `src/core/adapters/trae.ts` to generate `tml-ai-spec.md`.

## 4. Testing and Validation

- [x] 4.1 Run `npm run build` to ensure the new command file and adapter logic compile successfully.
- [x] 4.2 Test `node ./bin/tml-spec.js init` manually to verify the `tml-ai-spec` command file is generated correctly in the selected IDE's command directory alongside the others.