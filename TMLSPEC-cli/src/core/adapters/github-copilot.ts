import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand } from '../command-files.js';
import { buildNamespacedCommandPath, COMMAND_NAMESPACE } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';

export const githubCopilotAdapter: ToolAdapter = {
  tool: {
    id: 'github-copilot',
    label: 'GitHub Copilot',
    directory: `.github/prompts/${COMMAND_NAMESPACE}/`,
    fileType: 'Prompt Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: buildNamespacedCommandPath('.github/prompts/', 'project.prompt.md'),
        content: buildProjectMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.github/prompts/', 'requirement.prompt.md'),
        content: buildRequirementMarkdownCommand()
      }
    ];
  }
};