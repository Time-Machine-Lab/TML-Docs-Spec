import { buildDoctorMarkdownCommand, buildUpdateMarkdownCommand, buildAiSpecMarkdownCommand } from '../command-files.js';
import { buildNamespacedCommandPath } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';

export const codexAdapter: ToolAdapter = {
  tool: {
    id: 'codex',
    label: 'Codex',
    directory: `~/.codex/prompts/`,
    fileType: 'Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: buildNamespacedCommandPath('~/.codex/prompts/', 'doctor.md'),
        content: buildDoctorMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('~/.codex/prompts/', 'update.md'),
        content: buildUpdateMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('~/.codex/prompts/', 'ai-spec.md'),
        content: buildAiSpecMarkdownCommand()
      }
    ];
  }
};