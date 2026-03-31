import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand } from '../command-files.js';
import type { ToolAdapter } from '../types.js';

export const claudeAdapter: ToolAdapter = {
  tool: {
    id: 'claude',
    label: 'Claude Code',
    directory: '.claude/commands/',
    fileType: 'Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: '.claude/commands/project.md',
        content: buildProjectMarkdownCommand()
      },
      {
        relativePath: '.claude/commands/requirement.md',
        content: buildRequirementMarkdownCommand()
      }
    ];
  }
};