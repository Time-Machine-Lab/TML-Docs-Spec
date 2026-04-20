import { buildDoctorMarkdownCommand, buildUpdateMarkdownCommand, buildCovenantSyncMarkdownCommand } from '../command-files.js';
import { buildNamespacedCommandPath } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';

export const cursorAdapter: ToolAdapter = {
  tool: {
    id: 'cursor',
    label: 'Cursor',
    directory: `.cursor/commands/`,
    fileType: 'Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: buildNamespacedCommandPath('.cursor/commands/', 'doctor.md'),
        content: buildDoctorMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.cursor/commands/', 'update.md'),
        content: buildUpdateMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.cursor/commands/', 'covenant-sync.md'),
        content: buildCovenantSyncMarkdownCommand()
      }
    ];
  }
};