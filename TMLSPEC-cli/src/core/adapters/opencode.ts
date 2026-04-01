import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand } from '../command-files.js';
import { buildNamespacedCommandPath, COMMAND_NAMESPACE } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';

export const opencodeAdapter: ToolAdapter = {
  tool: {
    id: 'opencode',
    label: 'OpenCode',
    directory: `.opencode/commands/${COMMAND_NAMESPACE}/`,
    fileType: 'Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: buildNamespacedCommandPath('.opencode/commands/', 'project.md'),
        content: buildProjectMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.opencode/commands/', 'requirement.md'),
        content: buildRequirementMarkdownCommand()
      }
    ];
  }
};