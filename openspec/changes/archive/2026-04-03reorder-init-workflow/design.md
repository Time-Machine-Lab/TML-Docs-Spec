## Context

The current `runInit` pipeline in `TMLSPEC-cli` performs user prompts and setup actions in a mixed order where team-owned setup (docs skeleton, skill package, command injection) is interleaved with AI coding mode initialization (`openspec` check/install/init). Product intent has shifted to a two-phase setup model:

1. Complete TML environment initialization first.
2. Perform third-party mode-dependent initialization second.

This change keeps the same step responsibilities but reorders execution to improve clarity and predictability.

## Goals / Non-Goals

**Goals:**
- Enforce the new init sequence:
  1) intro animation
  2) workspace directory selection
  3) docs skeleton scaffolding (skip existing and declare skip)
  4) AI IDE selection
  5) skill package download
  6) TML command installation
  7) AI Coding Mode selection
  8) mode-specific initialization
- Preserve current file overwrite behavior controlled by `--force`.
- Preserve current adapter-driven architecture for multi-IDE command generation.

**Non-Goals:**
- No redesign of command content templates (`doctor.md`, `update.md`, `ai-spec.md`).
- No new third-party package introduction.
- No change to CLI command surface beyond sequence behavior.

## Decisions

### Decision 1: Split initialization into explicit pre-mode and mode-specific phases
- Implement two ordered phases inside `runInit`:
  - **TML pre-mode phase**: docs scaffold, IDE selection, skill setup, command injection
  - **Mode-specific phase**: coding mode prompt, OpenSpec check/install/init when required
- Rationale: directly matches product mental model and avoids user confusion about when third-party setup begins.
- Alternative considered: keep single loop and reorder inline statements only. Rejected because phase boundaries are less explicit and harder to maintain.

### Decision 2: Scaffold docs immediately after project root is known
- Run docs scaffolding right after resolving `projectRoot` and before IDE selection.
- Add explicit logging for created/skipped docs subdirectories to satisfy visibility requirements.
- Rationale: this step is team-owned and should happen before any third-party operation.
- Alternative considered: keep scaffolding at the end. Rejected because it violates new step ordering intent.

### Decision 3: Keep adapter contract, but execute skill installation before command writing
- Reuse existing adapter model (`generateFiles`, optional `postInit`), but execute skill download before command file generation.
- For current scope, skill package handling remains targeted to adapters that define `postInit` behavior (e.g., Trae).
- Rationale: minimal code churn with clear step separation.
- Alternative considered: introduce separate `preInstallSkill` adapter hook. Rejected for now to avoid expanding API surface.

### Decision 4: Prompt coding mode after team setup and gate OpenSpec actions by selection
- Move coding mode selection from early prompting to after team setup.
- Keep `openspec` install/init behavior unchanged, but trigger only during final mode-specific phase.
- Rationale: enforces "team-first, third-party-second" while preserving existing mode semantics.

## Risks / Trade-offs

- [Risk] Reordering may impact scripts that rely on old prompt timing -> [Mitigation] keep prompt content stable and update specs/tests around sequence.
- [Risk] Existing adapter `postInit` side effects may depend on command files already existing -> [Mitigation] validate adapter assumptions; for current adapters this dependency is absent.
- [Risk] Additional skip logging may be noisy in automation -> [Mitigation] keep concise, single-line skip/create logs per docs directory.
