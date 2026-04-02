import { homedir } from 'node:os';
import path from 'node:path';
import { buildDoctorMarkdownCommand, buildUpdateMarkdownCommand, buildAiSpecMarkdownCommand } from '../command-files.js';
import { buildNamespacedCommandPath } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';
const CODEX_PROMPTS_DIRECTORY = path.join(homedir(), '.codex', 'prompts');

export const codexAdapter: ToolAdapter = {
  tool: {
    id: 'codex',
    label: 'Codex',
    directory: CODEX_PROMPTS_DIRECTORY,
    fileType: 'Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: buildNamespacedCommandPath(CODEX_PROMPTS_DIRECTORY, 'doctor.md'),
        content: buildDoctorMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath(CODEX_PROMPTS_DIRECTORY, 'update.md'),
        content: buildUpdateMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath(CODEX_PROMPTS_DIRECTORY, 'ai-spec.md'),
        content: buildAiSpecMarkdownCommand()
      }
    ];
  }
};