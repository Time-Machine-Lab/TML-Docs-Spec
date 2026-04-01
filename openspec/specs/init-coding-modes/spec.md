## ADDED Requirements

### Requirement: Init Animation
The CLI SHALL display a black-and-white gradient ASCII animation of the "TML" text at the very beginning of the `init` command, requiring the user to press `[Enter]` to proceed.

#### Scenario: Running init command
- **WHEN** the user executes `tml-spec init`
- **THEN** the CLI clears the screen and renders the ASCII animation
- **AND THEN** displays a prompt waiting for the `[Enter]` key

### Requirement: Command Flattening
The CLI SHALL NOT place commands inside a `tml-spec` subfolder within the IDE's command directory. Instead, it SHALL prefix the command filenames with `tml-`.

#### Scenario: Injecting commands
- **WHEN** the user selects an IDE (e.g., Trae)
- **THEN** the commands are generated directly in `.trae/commands/`
- **AND THEN** the files are named `tml-project.md`, `tml-requirement.md`, `tml-doctor.md`, and `tml-update.md`

### Requirement: Scaffold Docs Restructure
The CLI SHALL scaffold the documentation directory structure as `docs/api`, `docs/sql`, `docs/design`, and `docs/spec`.

#### Scenario: Initializing docs
- **WHEN** the init process reaches the scaffolding step
- **THEN** it creates `docs/api`, `docs/sql`, `docs/design`, and `docs/spec` instead of the old `docs/project`

### Requirement: AI Coding Mode Selection
The CLI SHALL prompt the user to select an AI Coding Mode ("Vibe Coding" or "OpenSpec") before proceeding with OpenSpec installation or initialization.

#### Scenario: Selecting Vibe Coding
- **WHEN** the user selects "Vibe Coding"
- **THEN** the CLI skips the `openspec` global installation check
- **AND THEN** skips the `openspec init` execution
- **AND THEN** proceeds to scaffold docs and inject IDE commands

#### Scenario: Selecting OpenSpec
- **WHEN** the user selects "OpenSpec"
- **THEN** the CLI performs the `openspec` installation check (and installs if missing)
- **AND THEN** executes `openspec init`
- **AND THEN** proceeds to scaffold docs and inject IDE commands

### Requirement: New IDE Commands (Doctor & Update)
The CLI SHALL inject `tml-doctor.md` and `tml-update.md` placeholder commands into the selected IDE.

#### Scenario: Command injection includes new commands
- **WHEN** the CLI injects commands into the IDE
- **THEN** it includes `tml-doctor.md` for environment checks
- **AND THEN** it includes `tml-update.md` for CLI version updates