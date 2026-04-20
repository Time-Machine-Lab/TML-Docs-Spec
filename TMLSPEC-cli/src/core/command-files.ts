import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(currentDir, '..', '..');

function readCommandMarkdown(fileName: string): string {
  return readFileSync(path.join(packageRoot, 'src', 'core', 'commands', fileName), 'utf8').trimEnd();
}

export interface TmlCommandDefinition {
  id: string;
  fileName: string;
  description: string;
}

export const TML_COMMAND_DEFINITIONS: TmlCommandDefinition[] = [
  {
    id: 'doctor',
    fileName: 'doctor.md',
    description: 'Check environment health'
  },
  {
    id: 'update',
    fileName: 'update.md',
    description: 'Check for updates'
  },
  {
    id: 'covenant-sync',
    fileName: 'covenant-sync.md',
    description: 'Sync TML Public Knowledge to AI Coding Mode'
  }
];

export function buildCommandMarkdownByFileName(fileName: string): string {
  return readCommandMarkdown(fileName);
}

export function buildDoctorMarkdownCommand(): string {
  return readCommandMarkdown('doctor.md');
}

export function buildUpdateMarkdownCommand(): string {
  return readCommandMarkdown('update.md');
}

export function buildCovenantSyncMarkdownCommand(): string {
  return readCommandMarkdown('covenant-sync.md');
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
