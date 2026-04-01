## Why

The recently added CLI initialization workflow needs a few UX refinements. First, the current TML ASCII animation is a simple black-and-white gradient, which lacks the visual "wow" factor expected from modern CLI tools. It needs a more engaging effect (like a color sweep or a scanning animation). Second, the terminal output message at the very end of the `init` process contains outdated, hardcoded text that references the removed `tml-spec` subfolder and doesn't account for the new Vibe Coding mode. This confuses users and needs to be cleaned up.

## What Changes

- **Enhance ASCII Animation**: Refactor `src/utils/animation.ts` to implement a more complex and visually appealing animation. For example, adding a sweeping color effect (e.g., from deep blue to bright cyan) and a line-by-line scanning or fading transition, rather than just a uniform grayscale fade.
- **Clean up Terminal Output**: Modify `src/core/init.ts` to remove the outdated `console.log` instructions at the end of the script (lines 84-87). Replace it with a simple, mode-agnostic success message (e.g., "Setup complete! Your workspace is ready.").

## Capabilities

### Modified Capabilities
- `init-workflow`: Modify the CLI initialization flow to use the enhanced animation and output clean success messages without outdated instructions.

## Impact

- Users will experience a much cooler and more engaging startup animation.
- Users will no longer be confused by incorrect post-installation instructions.
- The `animation.ts` and `init.ts` files will be modified.