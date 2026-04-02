## MODIFIED Requirements

### Requirement: AI Coding Mode Selection
The CLI SHALL prompt the user to select an AI Coding Mode ("Vibe Coding" or "OpenSpec") only after TML docs scaffolding, skill setup, and command installation are complete.

#### Scenario: Selecting Vibe Coding
- **WHEN** the user selects "Vibe Coding" after TML team setup steps finish
- **THEN** the CLI skips the `openspec` global installation check
- **AND THEN** skips the `openspec init` execution
- **AND THEN** completes init successfully without running third-party OpenSpec initialization

#### Scenario: Selecting OpenSpec
- **WHEN** the user selects "OpenSpec" after TML team setup steps finish
- **THEN** the CLI performs the `openspec` installation check (and installs if missing)
- **AND THEN** executes `openspec init`
- **AND THEN** completes init successfully after mode-specific setup
