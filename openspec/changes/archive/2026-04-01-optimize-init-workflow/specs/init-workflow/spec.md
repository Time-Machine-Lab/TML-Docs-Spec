## ADDED Requirements

### Requirement: Remove Local Contract Bundle
The CLI SHALL NOT generate, bundle, or copy a local `contract` directory to the user's project root during initialization.

#### Scenario: User runs tml-spec init
- **WHEN** a user runs the `init` command
- **THEN** the system generates the `.ide/commands` folders
- **AND THEN** the system DOES NOT copy any `contract` templates

### Requirement: Auto Install OpenSpec
The CLI SHALL detect if `@fission-ai/openspec` is installed globally, and if missing, install it via npm.

#### Scenario: OpenSpec is missing
- **WHEN** `tml-spec init` is executed and `openspec` is not found in the environment
- **THEN** the system executes `npm install -g @fission-ai/openspec@latest`
- **AND THEN** waits for completion before proceeding

#### Scenario: OpenSpec is already installed
- **WHEN** `tml-spec init` is executed and `openspec` is found
- **THEN** the system skips the installation step

### Requirement: Silently Initialize OpenSpec
The CLI SHALL execute `openspec init` silently using the IDE and directory parameters collected from the user prompts.

#### Scenario: Successful OpenSpec initialization
- **WHEN** the `tml-spec init` setup phase begins
- **THEN** the system spawns `openspec init` with parameters matching the user's IDE and directory choices
- **AND THEN** completes without prompting the user for duplicate inputs

### Requirement: Fetch TML-Docs-Spec-Generate Skill
The CLI SHALL dynamically download the `tml-docs-spec-generate` skill from the TML-Skills GitHub repository and place it in the target IDE's skill directory.

#### Scenario: Supported IDE is selected
- **WHEN** the user selects an IDE that supports skills (e.g., Trae)
- **THEN** the system downloads the skill from `https://github.com/Time-Machine-Lab/TML-Skills/tree/master/skills/tml-docs-spec-generate`
- **AND THEN** places it in the appropriate IDE skill directory (e.g., `.trae/skills/tml-docs-spec-generate`)

### Requirement: Scaffold Docs Directory
The CLI SHALL generate a standard `docs` directory structure in the target project root.

#### Scenario: Directory generation
- **WHEN** `tml-spec init` finishes configuring the IDE
- **THEN** it creates `docs/api`, `docs/sql`, `docs/project`, and `docs/project/domain`
- **AND THEN** places a `.gitkeep` file in each newly created folder
