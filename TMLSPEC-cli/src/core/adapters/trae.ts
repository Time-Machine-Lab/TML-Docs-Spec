import path from 'node:path';
import { buildProjectMarkdownCommand, buildRequirementMarkdownCommand, buildDoctorMarkdownCommand, buildUpdateMarkdownCommand } from '../command-files.js';
import { buildNamespacedCommandPath } from '../command-paths.js';
import type { ToolAdapter } from '../types.js';
import { downloadSkill } from '../../utils/fs.js';

export const traeAdapter: ToolAdapter = {
  tool: {
    id: 'trae',
    label: 'Trae',
    directory: `.trae/commands/`,
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
      },
      {
        relativePath: buildNamespacedCommandPath('.trae/commands/', 'doctor.md'),
        content: buildDoctorMarkdownCommand()
      },
      {
        relativePath: buildNamespacedCommandPath('.trae/commands/', 'update.md'),
        content: buildUpdateMarkdownCommand()
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