import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand } from '../command-files.js';
import type { ToolAdapter } from '../types.js';

export const codexAdapter: ToolAdapter = {
  tool: {
    id: 'codex',
    label: 'Codex',
    directory: '.codex/prompts/',
    fileType: 'Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: '.codex/prompts/project.md',
        content: buildProjectMarkdownCommand()
      },
      {
        relativePath: '.codex/prompts/requirement.md',
        content: buildRequirementMarkdownCommand()
      }
    ];
  }
};