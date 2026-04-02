## ADDED Requirements

### Requirement: Team-First Init Sequencing
The CLI SHALL execute `tml-spec init` in two phases where all TML-owned setup steps complete before any AI coding mode dependent third-party initialization.

#### Scenario: Full init sequence execution
- **WHEN** the user runs `tml-spec init`
- **THEN** the CLI runs steps in this order: intro animation, workspace directory selection, docs skeleton scaffolding, AI IDE selection, TML skill package download, TML command installation, AI Coding Mode selection, and mode-specific initialization
- **AND THEN** no mode-dependent OpenSpec install or init action runs before TML skill and command setup complete

### Requirement: Docs Skeleton Skip Visibility
The CLI SHALL report whether each docs skeleton directory was created or skipped when it already exists.

#### Scenario: Docs directories already exist
- **WHEN** `docs/api`, `docs/sql`, `docs/design`, or `docs/spec` already exists in the target workspace
- **THEN** the CLI skips recreating the directory
- **AND THEN** the CLI outputs a clear skip message for each skipped directory

#### Scenario: Docs directories do not exist
- **WHEN** a required docs skeleton directory is missing
- **THEN** the CLI creates the directory and `.gitkeep` file
- **AND THEN** the CLI outputs a clear created message for each created directory
