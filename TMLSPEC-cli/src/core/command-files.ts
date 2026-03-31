import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(currentDir, '..', '..');

function readCommandMarkdown(fileName: string): string {
  return readFileSync(path.join(packageRoot, 'src', 'core', 'commands', fileName), 'utf8').trimEnd();
}

export function buildProjectMarkdownCommand(): string {
  return readCommandMarkdown('project.md');
}

export function buildRequirementMarkdownCommand(): string {
  return readCommandMarkdown('requirement.md');
}

export function buildGeminiTomlCommand(name: string, description: string, prompt: string): string {
  const escapedPrompt = prompt
    .replace(/\\/g, '\\\\')
    .replace(/"""/g, '\\\"\\\"\\\"');

  return [
    `name = "${name}"`,
    `description = "${description}"`,
    'prompt = """',
    escapedPrompt,
    '"""'
  ].join('\n');
}