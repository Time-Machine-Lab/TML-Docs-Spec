import { claudeAdapter } from './claude.js';
import { codexAdapter } from './codex.js';
import { cursorAdapter } from './cursor.js';
import { geminiAdapter } from './gemini.js';
import { githubCopilotAdapter } from './github-copilot.js';
import { opencodeAdapter } from './opencode.js';
import { traeAdapter } from './trae.js';
import type { ToolAdapter, ToolId } from '../types.js';

const adapters: Record<ToolId, ToolAdapter> = {
  claude: claudeAdapter,
  codex: codexAdapter,
  cursor: cursorAdapter,
  'github-copilot': githubCopilotAdapter,
  gemini: geminiAdapter,
  opencode: opencodeAdapter,
  trae: traeAdapter
};

export function getAdapter(toolId: ToolId): ToolAdapter {
  return adapters[toolId];
}