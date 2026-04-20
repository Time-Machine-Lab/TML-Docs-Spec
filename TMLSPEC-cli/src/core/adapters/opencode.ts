import { buildDoctorMarkdownCommand, buildUpdateMarkdownCommand, buildCovenantSyncMarkdownCommand } from '../command-files.js';
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
        relativePath: buildNamespacedCommandPath('.opencode/commands/', 'doctor.md'),
        content: buildDoctorMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.opencode/commands/', 'update.md'),
        content: buildUpdateMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.opencode/commands/', 'covenant-sync.md'),
        content: buildCovenantSyncMarkdownCommand()
      }
    ];
  }
};