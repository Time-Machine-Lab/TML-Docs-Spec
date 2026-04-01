## Why

The current initialization process is functional but lacks polish and flexibility. First, burying commands inside a nested `tml-spec` folder makes them harder to find and use. Second, the default documentation structure needs to better align with standard design and spec patterns. Finally, the tool currently assumes every user wants the full OpenSpec installation, ignoring users who prefer a more lightweight "Vibe Coding" approach where they just want the folder structure and basic commands without the strict OpenSpec workflow. To address this, we need a more engaging start (with an ASCII animation) and a clear choice between coding modes.

## What Changes

- **Command Flattening:** Remove the nested `commands/tml-spec` directory. All injected commands will now be placed directly in the IDE's root command directory, prefixed with `tml-` (e.g., `tml-project.md`, `tml-requirement.md`).
- **New Scaffolded Commands:** Introduce two new command files during initialization:
  - `tml-doctor.md`: To check the environment health and provide recommendations (placeholder for now).
  - `tml-update.md`: To check for CLI updates and assist the user in upgrading.
- **Docs Restructure:** Change the scaffolded `docs/project` folder to `docs/design`, and add a new `docs/spec` folder.
- **Initialization Animation:** Add a black-and-white gradient ASCII animation using TML characters at the start of the `init` command, requiring the user to press `[Enter]` to proceed.
- **AI Coding Mode Selection:** Before executing the OpenSpec initialization, prompt the user to choose between "Vibe Coding" and "OpenSpec".
  - *Vibe Coding*: Skips the OpenSpec installation and init, but still creates the docs structure and injects the commands.
  - *OpenSpec*: Proceeds with the current OpenSpec installation and initialization flow.

## Capabilities

### New Capabilities
- `init-animation`: A gradient ASCII animation that plays at the start of the CLI init process.
- `coding-mode-selection`: A prompt allowing users to choose between "Vibe Coding" and "OpenSpec" modes.
- `command-flattening`: The ability to inject commands without a nested namespace directory, using a `tml-` prefix instead.
- `new-commands`: Scaffolding for `tml-doctor.md` and `tml-update.md` commands.

### Modified Capabilities
- `init-workflow`: Updated to include the new prompt flow, the updated docs scaffolding (`docs/design`, `docs/spec`), and the mode branching logic.

## Impact

- The user experience of the CLI will be significantly improved with a visual intro and clear choices.
- The generated folder structure in target projects will be flatter in the IDE command directories and more standard in the `docs` directory.
- `src/core/init.ts`, `src/core/command-paths.ts`, and adapter files will be heavily modified to support these structural and flow changes.