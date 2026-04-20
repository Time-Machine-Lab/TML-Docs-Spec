import { buildGeminiTomlCommand, buildDoctorMarkdownCommand, buildUpdateMarkdownCommand, buildCovenantSyncMarkdownCommand } from '../command-files.js';
import { buildNamespacedCommandPath } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';

export const geminiAdapter: ToolAdapter = {
  tool: {
    id: 'gemini',
    label: 'Gemini CLI',
    directory: `.gemini/commands/`,
    fileType: 'TOML'
  },
  generateFiles() {
    return [
      {
        relativePath: buildNamespacedCommandPath('.gemini/commands/', 'doctor.toml'),
        content: buildGeminiTomlCommand('doctor', 'Check environment health', buildDoctorMarkdownCommand())
      },
      {
        relativePath: buildNamespacedCommandPath('.gemini/commands/', 'update.toml'),
        content: buildGeminiTomlCommand('update', 'Check for updates', buildUpdateMarkdownCommand())
      },
      {
        relativePath: buildNamespacedCommandPath('.gemini/commands/', 'covenant-sync.toml'),
        content: buildGeminiTomlCommand('covenant-sync', 'Sync TML Public Knowledge to AI Coding Mode', buildCovenantSyncMarkdownCommand())
      }
    ];
  }
};