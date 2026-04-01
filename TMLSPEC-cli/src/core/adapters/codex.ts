import { homedir } from 'node:os';
import path from 'node:path';
import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand } from '../command-files.js';
import { COMMAND_NAMESPACE } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';

const CODEX_PROMPTS_DIRECTORY = path.join(homedir(), '.codex', 'prompts');

export const codexAdapter: ToolAdapter = {
  tool: {
    id: 'codex',
    label: 'Codex',
    directory: `~/.codex/prompts/`,
    fileType: 'Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: path.join(CODEX_PROMPTS_DIRECTORY, `${COMMAND_NAMESPACE}-project.md`),
        content: buildProjectMarkdownCommand()
      },
      {
        relativePath: path.join(CODEX_PROMPTS_DIRECTORY, `${COMMAND_NAMESPACE}-requirement.md`),
        content: buildRequirementMarkdownCommand()
      }
    ];
  }
};