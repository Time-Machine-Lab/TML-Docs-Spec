import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand, buildDoctorMarkdownCommand, buildUpdateMarkdownCommand } from '../command-files.js';
import { buildNamespacedCommandPath } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';

export const claudeAdapter: ToolAdapter = {
  tool: {
    id: 'claude',
    label: 'Claude Code',
    directory: `.claude/commands/`,
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
      },
      {
        relativePath: buildNamespacedCommandPath('.claude/commands/', 'doctor.md'),
        content: buildDoctorMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.claude/commands/', 'update.md'),
        content: buildUpdateMarkdownCommand()
      }
    ];
  }
};