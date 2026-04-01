import type { ToolOption } from './types.js';

export const TOOL_OPTIONS: ToolOption[] = [
  {
    id: 'claude',
    label: 'Claude Code',
    directory: `.claude/commands/`,
    fileType: 'Markdown'
  },
  {
    id: 'cursor',
    label: 'Cursor',
    directory: `.cursor/commands/`,
    fileType: 'Markdown'
  },
  {
    id: 'github-copilot',
    label: 'GitHub Copilot',
    directory: `.github/prompts/`,
    fileType: 'Prompt Markdown'
  },
  {
    id: 'gemini',
    label: 'Gemini CLI',
    directory: `.gemini/commands/`,
    fileType: 'TOML'
  },
  {
    id: 'opencode',
    label: 'OpenCode',
    directory: `.opencode/commands/`,
    fileType: 'Markdown'
  },
  {
    id: 'codex',
    label: 'Codex',
    directory: `~/.codex/prompts/`,
    fileType: 'Markdown'
  },
  {
    id: 'trae',
    label: 'Trae',
    directory: `.trae/commands/`,
    fileType: 'Markdown'
  }
];

