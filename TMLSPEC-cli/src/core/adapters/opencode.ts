import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand } from '../command-files.js';
import type { ToolAdapter } from '../types.js';

export const opencodeAdapter: ToolAdapter = {
  tool: {
    id: 'opencode',
    label: 'OpenCode',
    directory: '.opencode/commands/',
    fileType: 'Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: '.opencode/commands/project.md',
        content: buildProjectMarkdownCommand()
      },
      {
        relativePath: '.opencode/commands/requirement.md',
        content: buildRequirementMarkdownCommand()
      }
    ];
  }
};