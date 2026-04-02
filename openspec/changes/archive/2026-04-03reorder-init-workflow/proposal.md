## Why

Current `tml-spec init` interleaves team-owned setup tasks and third-party AI coding mode setup, which makes the flow harder to understand and less predictable for users. Reordering the same steps improves mental model clarity: finish TML environment preparation first, then perform mode-dependent third-party initialization.

## What Changes

- Reorder `init` execution to follow this sequence: animation → workspace directory selection → docs skeleton scaffolding → AI IDE selection → team skill download → TML command installation → AI coding mode selection → mode-specific initialization.
- Keep existing step responsibilities intact, but move their execution points to the new order.
- Add explicit "skip" messaging when docs skeleton directories already exist.
- Preserve current behavior for generated files and overwrite semantics (`--force`), while aligning timing with the new sequence.

## Capabilities

### New Capabilities
- `init-team-first-sequencing`: Define and enforce a team-first initialization pipeline where TML-owned setup always completes before third-party mode initialization.

### Modified Capabilities
- `init-workflow`: Update requirement scenarios to reflect the new execution order and explicit docs skeleton skip reporting.
- `init-coding-modes`: Update requirement scenarios so coding mode selection and OpenSpec checks happen after TML skills and command installation.

## Impact

- Affected code: `src/core/init.ts`, selected tool adapters (`src/core/adapters/*`), and filesystem helper behavior used during scaffolding.
- Affected UX: prompt order, status output ordering, and visibility of skip messages for docs scaffold.
- External dependencies: no new dependency introduced; existing `openspec` command checks and optional installation remain in place but are triggered later in the flow.
