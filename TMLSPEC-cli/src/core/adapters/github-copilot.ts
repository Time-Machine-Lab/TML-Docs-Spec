import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand } from '../command-files.js';
import type { ToolAdapter } from '../types.js';

export const githubCopilotAdapter: ToolAdapter = {
  tool: {
    id: 'github-copilot',
    label: 'GitHub Copilot',
    directory: '.github/prompts/',
    fileType: 'Prompt Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: '.github/prompts/project.prompt.md',
        content: buildProjectMarkdownCommand()
      },
      {
        relativePath: '.github/prompts/requirement.prompt.md',
        content: buildRequirementMarkdownCommand()
      }
    ];
  }
};