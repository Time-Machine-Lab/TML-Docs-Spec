import path from 'node:path';
import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand } from '../command-files.js';
import { buildNamespacedCommandPath, COMMAND_NAMESPACE } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';
import { downloadSkill } from '../../utils/fs.js';

export const traeAdapter: ToolAdapter = {
  tool: {
    id: 'trae',
    label: 'Trae',
    directory: `.trae/commands/${COMMAND_NAMESPACE}/`,
    fileType: 'Markdown'
  },
  generateFiles() {
    return [
      {
        relativePath: buildNamespacedCommandPath('.trae/commands/', 'project.md'),
        content: buildProjectMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.trae/commands/', 'requirement.md'),
        content: buildRequirementMarkdownCommand()
      }
    ];
  },
  async postInit(projectRoot: string) {
    const destPath = path.join(projectRoot, '.trae/skills/tml-docs-spec-generate');
    console.log('Downloading tml-docs-spec-generate skill for Trae...');
    try {
      await downloadSkill('Time-Machine-Lab/TML-Skills/skills/tml-docs-spec-generate', destPath);
      console.log('Skill downloaded successfully to .trae/skills/tml-docs-spec-generate');
    } catch (error) {
      console.error('Failed to download skill for Trae:', error);
    }
  }
};