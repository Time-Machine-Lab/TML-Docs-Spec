## 1. Init Flow Refactor

- [x] 1.1 Refactor `collectAnswers` and `runInit` to separate early project-root collection from later coding-mode selection.
- [x] 1.2 Reorder `runInit` execution to: animation → project root → docs scaffold → IDE selection → skill setup → command installation → coding mode → mode-specific initialization.
- [x] 1.3 Keep existing `--tools`, `--project-root`, and `--force` override semantics while applying the new execution order.

## 2. Docs Scaffold Behavior

- [x] 2.1 Update docs scaffolding flow to run immediately after project root resolution.
- [x] 2.2 Add explicit per-directory created/skipped terminal output for `docs/api`, `docs/sql`, `docs/design`, and `docs/spec`.
- [x] 2.3 Preserve `.gitkeep` creation behavior and skip logic for pre-existing files.

## 3. Adapter and Mode-Specific Integration

- [x] 3.1 Ensure team skill setup executes before command file generation for selected IDE adapters.
- [x] 3.2 Keep adapter-based command generation behavior unchanged, including filename prefixing and overwrite handling.
- [x] 3.3 Trigger OpenSpec command existence check, optional installation, and `openspec init` only after coding mode is selected.

## 4. Validation

- [x] 4.1 Run CLI build/typecheck to verify refactor compiles.
- [x] 4.2 Run a local `tml-spec init` dry run scenario to confirm prompt/log sequence matches the new eight-step order.
- [x] 4.3 Verify OpenSpec mode still installs/checks and initializes correctly, and Vibe mode still skips third-party setup.
