export type ToolId = 'claude' | 'cursor' | 'github-copilot' | 'gemini' | 'opencode' | 'codex' | 'trae';

export interface ToolOption {
  id: ToolId;
  label: string;
  directory: string;
  fileType: string;
}

export interface InitAnswers {
  projectRoot: string;
  tools: ToolId[];
  codingMode: 'vibe' | 'openspec';
  force: boolean;
}

export interface GeneratedCommandFile {
  relativePath: string;
  content: string;
}

export interface ToolAdapter {
  tool: ToolOption;
  generateFiles(): GeneratedCommandFile[];
  postInit?(projectRoot: string): Promise<void>;
}