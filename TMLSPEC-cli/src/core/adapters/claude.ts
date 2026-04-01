import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand } from '../command-files.js';
import { buildNamespacedCommandPath, COMMAND_NAMESPACE } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';

export const claudeAdapter: ToolAdapter = {
  tool: {
    id: 'claude',
    label: 'Claude Code',
    directory: `.claude/commands/${COMMAND_NAMESPACE}/`,
    fileType: 'Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: buildNamespacedCommandPath('.claude/commands/', 'project.md'),
        content: buildProjectMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.claude/commands/', 'requirement.md'),
        content: buildRequirementMarkdownCommand()
      }
    ];
  }
};