import {
  buildGeminiTomlCommand,
  buildProjectMarkdownCommand,
  buildRequirementMarkdownCommand
} from '../command-files.js';
import { buildNamespacedCommandPath, COMMAND_NAMESPACE } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';

export const geminiAdapter: ToolAdapter = {
  tool: {
    id: 'gemini',
    label: 'Gemini CLI',
    directory: `.gemini/commands/${COMMAND_NAMESPACE}/`,
    fileType: 'TOML'
  },
  generateFiles() {
    return [
      {
        relativePath: buildNamespacedCommandPath('.gemini/commands/', 'project.toml'),
        content: buildGeminiTomlCommand('project', '项目级文档命令', buildProjectMarkdownCommand())
      },
      {
        relativePath: buildNamespacedCommandPath('.gemini/commands/', 'requirement.toml'),
        content: buildGeminiTomlCommand('requirement', '需求级 openspec 命令', buildRequirementMarkdownCommand())
      }
    ];
  }
};