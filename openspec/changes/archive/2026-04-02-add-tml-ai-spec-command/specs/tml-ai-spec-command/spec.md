## ADDED Requirements

### Requirement: TML-AI-Spec Command Generation
The CLI SHALL generate a new command file named `tml-ai-spec.md` (or `.toml` equivalent) in the selected IDE's command directory during the `init` process.

#### Scenario: Running init command
- **WHEN** the user executes `tml-spec init` and selects an IDE
- **THEN** the CLI generates the standard commands (`tml-project`, `tml-requirement`, `tml-doctor`, `tml-update`)
- **AND THEN** the CLI generates an additional command named `tml-ai-spec` containing the TML-Spec-Coding sync instructions

### Requirement: Command Content
The `ai-spec.md` command file SHALL instruct the AI to detect the current AI Coding Mode and inject a specific TML-Spec-Coding YAML configuration block.

#### Scenario: Executing /tml-ai-spec
- **WHEN** the user invokes `/tml-ai-spec` or `/tml-ai-spec [Mode]` in the IDE
- **THEN** the AI is instructed to read the target configuration file (e.g., `.openspec.yaml`)
- **AND THEN** the AI may consult `https://github.com/Fission-AI/OpenSpec` for schema updates
- **AND THEN** the AI injects the predefined Chinese `project_context` (covering `docs/design/*.md` and `docs/spec/**/*`) and the strict `rules` (covering Global, Explore, Propose, and Apply constraints) into the configuration file