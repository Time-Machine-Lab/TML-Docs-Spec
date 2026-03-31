import {
  buildGeminiTomlCommand,
  buildProjectMarkdownCommand,
  buildRequirementMarkdownCommand
} from '../command-files.js';
import type { ToolAdapter } from '../types.js';

export const geminiAdapter: ToolAdapter = {
  tool: {
    id: 'gemini',
    label: 'Gemini CLI',
    directory: '.gemini/commands/',
    fileType: 'TOML'
  },
  generateFiles() {
    return [
      {
        relativePath: '.gemini/commands/project.toml',
        content: buildGeminiTomlCommand('project', '项目级文档命令', buildProjectMarkdownCommand())
      },
      {
        relativePath: '.gemini/commands/requirement.toml',
        content: buildGeminiTomlCommand('requirement', '需求级 openspec 命令', buildRequirementMarkdownCommand())
      }
    ];
  }
};