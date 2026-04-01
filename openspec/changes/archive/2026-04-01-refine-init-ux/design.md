## Context

We recently integrated an initial ASCII animation and a prompt-based mode selection into the CLI's `init` command. However, the animation (a simple black-to-white intensity fade) feels rigid, and the terminal's closing messages are still hardcoded to explain an older, nested `commands/tml-spec` directory structure. These instructions mislead the user and diminish the improved Vibe Coding/OpenSpec workflow.

## Goals / Non-Goals

**Goals:**
- Upgrade the ASCII animation in `src/utils/animation.ts` to be visually stunning. Introduce a color wave (e.g., Cyberpunk Cyan/Blue) and a more dynamic rendering effect (such as sweeping across the screen or cascading characters).
- Remove the outdated closing instructions in `src/core/init.ts` that mention the `tml-spec` namespace.
- Replace the removed output with a concise, universally applicable success message like "Setup complete! Your workspace is ready."

**Non-Goals:**
- Changing the actual prompt flow or OpenSpec integration logic that was recently established.

## Decisions

- **Animation Effect:** To avoid heavy external libraries (like `chalk-animation` or `cfonts`), we'll implement a custom ANSI-based scanning effect. Instead of fading the entire text globally, we will calculate the color of each character based on its column/row position and the current frame index, creating a smooth horizontal or diagonal color wave effect using RGB ANSI sequences (`\x1b[38;2;R;G;Bm`).
- **Terminal Cleanup:** Simply delete the last four `console.log` lines from `src/core/init.ts` and replace them with a unified `console.log('\n✨ TML Workspace Setup Complete! 🎉\n');`.

## Risks / Trade-offs

- **[Risk] Complex Animation Logic:** Calculating per-character RGB values and rendering them string-by-string can be slightly more computationally intensive and harder to maintain than simple string fading.
  - **Mitigation:** Keep the animation loop simple. We'll use a sine wave calculation based on character index to generate a smooth, moving gradient.