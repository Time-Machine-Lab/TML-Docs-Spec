import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand } from '../command-files.js';
import { buildNamespacedCommandPath, COMMAND_NAMESPACE } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';

export const traeAdapter: ToolAdapter = {
  tool: {
    id: 'trae',
    label: 'Trae',
    directory: `.trae/commands/${COMMAND_NAMESPACE}/`,
    fileType: 'Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: buildNamespacedCommandPath('.trae/commands/', 'project.md'),
        content: buildProjectMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.trae/commands/', 'requirement.md'),
        content: buildRequirementMarkdownCommand()
      }
    ];
  }
};