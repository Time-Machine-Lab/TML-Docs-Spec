import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand } from '../command-files.js';
import type { ToolAdapter } from '../types.js';

export const traeAdapter: ToolAdapter = {
  tool: {
    id: 'trae',
    label: 'Trae',
    directory: '.trae/commands/',
    fileType: 'Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: '.trae/commands/project.md',
        content: buildProjectMarkdownCommand()
      },
      {
        relativePath: '.trae/commands/requirement.md',
        content: buildRequirementMarkdownCommand()
      }
    ];
  }
};