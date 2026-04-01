import type { ToolOption } from './types.js';
import { COMMAND_NAMESPACE } from './command-paths.js';

export const TOOL_OPTIONS: ToolOption[] = [
  {
    id: 'claude',
    label: 'Claude Code',
    directory: `.claude/commands/${COMMAND_NAMESPACE}/`,
    fileType: 'Markdown'
  },
  {
    id: 'cursor',
    label: 'Cursor',
    directory: `.cursor/commands/${COMMAND_NAMESPACE}/`,
    fileType: 'Markdown'
  },
  {
    id: 'github-copilot',
    label: 'GitHub Copilot',
    directory: `.github/prompts/${COMMAND_NAMESPACE}/`,
    fileType: 'Prompt Markdown'
  },
  {
    id: 'gemini',
    label: 'Gemini CLI',
    directory: `.gemini/commands/${COMMAND_NAMESPACE}/`,
    fileType: 'TOML'
  },
  {
    id: 'opencode',
    label: 'OpenCode',
    directory: `.opencode/commands/${COMMAND_NAMESPACE}/`,
    fileType: 'Markdown'
  },
  {
    id: 'codex',
    label: 'Codex',
    directory: `~/.codex/prompts/${COMMAND_NAMESPACE}/`,
    fileType: 'Markdown'
  },
  {
    id: 'trae',
    label: 'Trae',
    directory: `.trae/commands/${COMMAND_NAMESPACE}/`,
    fileType: 'Markdown'
  }
];

