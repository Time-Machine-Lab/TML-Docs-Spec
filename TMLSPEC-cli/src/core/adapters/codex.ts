import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand } from '../command-files.js';
import { buildNamespacedCommandPath, COMMAND_NAMESPACE } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';

export const codexAdapter: ToolAdapter = {
  tool: {
    id: 'codex',
    label: 'Codex',
    directory: `.codex/prompts/${COMMAND_NAMESPACE}/`,
    fileType: 'Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: buildNamespacedCommandPath('.codex/prompts/', 'project.md'),
        content: buildProjectMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.codex/prompts/', 'requirement.md'),
        content: buildRequirementMarkdownCommand()
      }
    ];
  }
};