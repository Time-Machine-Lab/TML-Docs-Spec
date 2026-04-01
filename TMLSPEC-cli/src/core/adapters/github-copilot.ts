import { buildDoctorMarkdownCommand, buildUpdateMarkdownCommand, buildAiSpecMarkdownCommand } from '../command-files.js';
import { buildNamespacedCommandPath } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';

export const githubCopilotAdapter: ToolAdapter = {
  tool: {
    id: 'github-copilot',
    label: 'GitHub Copilot',
    directory: `.github/prompts/`,
    fileType: 'Prompt Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: buildNamespacedCommandPath('.github/prompts/', 'doctor.prompt.md'),
        content: buildDoctorMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.github/prompts/', 'update.prompt.md'),
        content: buildUpdateMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.github/prompts/', 'ai-spec.prompt.md'),
        content: buildAiSpecMarkdownCommand()
      }
    ];
  }
};