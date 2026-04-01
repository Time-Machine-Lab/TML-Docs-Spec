import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand } from '../command-files.js';
import { buildNamespacedCommandPath, COMMAND_NAMESPACE } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';

export const cursorAdapter: ToolAdapter = {
  tool: {
    id: 'cursor',
    label: 'Cursor',
    directory: `.cursor/commands/${COMMAND_NAMESPACE}/`,
    fileType: 'Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: buildNamespacedCommandPath('.cursor/commands/', 'project.md'),
        content: buildProjectMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.cursor/commands/', 'requirement.md'),
        content: buildRequirementMarkdownCommand()
      }
    ];
  }
};