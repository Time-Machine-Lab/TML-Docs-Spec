import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand } from '../command-files.js';
import type { ToolAdapter } from '../types.js';

export const cursorAdapter: ToolAdapter = {
  tool: {
    id: 'cursor',
    label: 'Cursor',
    directory: '.cursor/commands/',
    fileType: 'Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: '.cursor/commands/project.md',
        content: buildProjectMarkdownCommand()
      },
      {
        relativePath: '.cursor/commands/requirement.md',
        content: buildRequirementMarkdownCommand()
      }
    ];
  }
};