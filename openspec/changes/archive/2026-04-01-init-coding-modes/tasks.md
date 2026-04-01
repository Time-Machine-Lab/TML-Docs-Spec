## 1. ASCII Animation Implementation

- [x] 1.1 Create `src/utils/animation.ts` with a `playIntroAnimation()` function that renders a black-and-white gradient "TML" ASCII art and waits for `[Enter]`.
- [x] 1.2 Call `await playIntroAnimation()` at the very beginning of `runInit()` in `src/core/init.ts`.

## 2. Command Structure and Scaffolding Updates

- [x] 2.1 Update `src/core/command-paths.ts` to remove the `tml-spec/` subfolder from `COMMAND_NAMESPACE` or adjust `buildNamespacedCommandPath` to just prepend `tml-` to the file name.
- [x] 2.2 Update `src/core/init.ts` scaffolding logic to use `['docs/api', 'docs/sql', 'docs/design', 'docs/spec']` instead of the old array.

## 3. New Commands (Doctor & Update)

- [x] 3.1 Create placeholder Markdown templates for `doctor.md` and `update.md` in `src/core/commands/`.
- [x] 3.2 Update `src/core/command-files.ts` to export `buildDoctorMarkdownCommand()` and `buildUpdateMarkdownCommand()`.
- [x] 3.3 Update all adapters (e.g., `trae.ts`, `claude.ts`) to return 4 commands (`tml-project.md`, `tml-requirement.md`, `tml-doctor.md`, `tml-update.md`) in their `generateFiles()` method.

## 4. AI Coding Mode Prompt

- [x] 4.1 Update `src/core/init.ts` to add a new `@inquirer/prompts` `select` block asking for the "AI Coding Mode" (Choices: "Vibe Coding", "OpenSpec").
- [x] 4.2 Wrap the OpenSpec installation check (`checkCommandExists` and `npm install`) and the `openspec init` execution in an `if (answers.codingMode === 'openspec')` block.
- [x] 4.3 Ensure that `scaffoldDirectories` and the `generateFiles` loops still execute for both modes.

## 5. Testing and Validation

- [x] 5.1 Run `npm run build` to ensure the new files and logic compile successfully.
- [x] 5.2 Test `node ./bin/tml-spec.js init` manually to verify the animation plays, the prompt appears, and selecting "Vibe Coding" skips OpenSpec while creating the right flat `tml-` commands and `docs/design`, `docs/spec` directories.