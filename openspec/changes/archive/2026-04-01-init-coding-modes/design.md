## Context

The current `tml-spec init` workflow creates a nested directory structure in the IDE's command folder (`.ide/commands/tml-spec/`), uses an implicit OpenSpec setup, and scaffolds a generic `docs/project` structure. To provide a better "AI Programming Workflow Guide" experience, we need an engaging entry point, simpler command discovery, standard documentation folders (`docs/design`, `docs/spec`), and a clear choice between structured (OpenSpec) and freeform (Vibe Coding) approaches.

## Goals / Non-Goals

**Goals:**
- Provide a visually appealing TML ASCII art animation with a black-and-white gradient effect that pauses for user input (`[Enter]`) at the start of `tml-spec init`.
- Restructure the scaffolded directories: Rename `docs/project` to `docs/design`, add `docs/spec`, and maintain `docs/api` and `docs/sql`.
- Simplify the IDE command structure by removing the `tml-spec/` namespace folder and prefixing the files directly (e.g., `tml-project.md`, `tml-requirement.md`).
- Introduce two new command files (`tml-doctor.md` and `tml-update.md`) in the IDE command directories.
- Add an interactive prompt for "AI Coding Mode" (Vibe Coding vs. OpenSpec) using `@inquirer/prompts`.
  - Vibe Coding skips the `openspec` npm installation and init process, but still scaffolds the `docs` and IDE commands.
  - OpenSpec maintains the current flow.

**Non-Goals:**
- Implementing the actual logic inside `tml-doctor.md` and `tml-update.md` commands (they will be scaffolded as placeholders with basic prompts).
- Modifying the core features of `tml-docs-spec-generate` skill.

## Decisions

- **Animation Implementation:** Use Node.js `readline` and `process.stdout.write` along with ANSI escape codes (`\x1b[38;2;R;G;Bm`) to render the gradient ASCII art. A simple loop will display it, and `readline.createInterface` will wait for the `Enter` key. This avoids adding heavy animation dependencies.
- **Command Structure:** Modify `src/core/command-paths.ts` to drop the `COMMAND_NAMESPACE` directory and append `tml-` to the filenames. This keeps the files at the root of the IDE's command directory (e.g., `.trae/commands/tml-project.md`).
- **AI Coding Mode Prompt:** Insert a new `@inquirer/prompts` `select` prompt right after the IDE selection in `src/core/init.ts`. The prompt will return either `'vibe'` or `'openspec'`. The value will control whether the `checkCommandExists` and `openspec init` blocks execute.
- **New Commands:** Add `buildDoctorMarkdownCommand` and `buildUpdateMarkdownCommand` to `src/core/command-files.ts` and their respective template files in `src/core/commands/`.

## Risks / Trade-offs

- **[Risk] ASCII Art Compatibility:** ANSI escape codes might not render perfectly in all terminal emulators, especially older Windows terminals.
  - **Mitigation:** Keep the gradient simple (black-and-white/grayscale) and fallback gracefully if truecolor isn't supported.
- **[Risk] IDE Command Conflicts:** By removing the `tml-spec` namespace folder, there is a minor risk of filename collisions in the user's IDE command directory.
  - **Mitigation:** The `tml-` prefix strongly mitigates this risk by serving as an inline namespace.