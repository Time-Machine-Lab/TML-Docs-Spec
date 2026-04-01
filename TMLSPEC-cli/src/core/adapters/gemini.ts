import { buildGeminiTomlCommand, buildProjectMarkdownCommand, buildRequirementMarkdownCommand, buildDoctorMarkdownCommand, buildUpdateMarkdownCommand } from '../command-files.js';
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
        relativePath: buildNamespacedCommandPath('.gemini/commands/', 'project.toml'),
        content: buildGeminiTomlCommand('project', 'Handle project-level documentation', buildProjectMarkdownCommand())
      },
      {
        relativePath: buildNamespacedCommandPath('.gemini/commands/', 'requirement.toml'),
        content: buildGeminiTomlCommand('requirement', 'Handle requirement-level tasks', buildRequirementMarkdownCommand())
      },
      {
        relativePath: buildNamespacedCommandPath('.gemini/commands/', 'doctor.toml'),
        content: buildGeminiTomlCommand('doctor', 'Check environment health', buildDoctorMarkdownCommand())
      },
      {
        relativePath: buildNamespacedCommandPath('.gemini/commands/', 'update.toml'),
        content: buildGeminiTomlCommand('update', 'Check for updates', buildUpdateMarkdownCommand())
      }
    ];
  }
};