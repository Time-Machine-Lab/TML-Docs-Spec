import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand, buildDoctorMarkdownCommand, buildUpdateMarkdownCommand } from '../command-files.js';
import { buildNamespacedCommandPath } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';

export const opencodeAdapter: ToolAdapter = {
  tool: {
    id: 'opencode',
    label: 'OpenCode',
    directory: `.opencode/commands/`,
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
      },
      {
        relativePath: buildNamespacedCommandPath('.opencode/commands/', 'doctor.md'),
        content: buildDoctorMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.opencode/commands/', 'update.md'),
        content: buildUpdateMarkdownCommand()
      }
    ];
  }
};