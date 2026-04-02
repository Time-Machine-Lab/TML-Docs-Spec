import path from 'node:path';
import { homedir } from 'node:os';
import { confirm, input, select } from '@inquirer/prompts';
import { TOOL_OPTIONS } from './catalog.js';
import { buildCommandMarkdownByFileName, buildGeminiTomlCommand, TML_COMMAND_DEFINITIONS, type TmlCommandDefinition } from './command-files.js';
import { buildNamespacedCommandPath } from './command-paths.js';
import type { GeneratedCommandFile, ToolId, ToolOption } from './types.js';
import { downloadSkill, scaffoldDirectories, writeTextFile } from '../utils/fs.js';
import { checkCommandExists, runCommand } from '../utils/exec.js';
import { playIntroAnimation } from '../utils/animation.js';

interface InitOverrides {
  projectRoot?: string;
  tools?: ToolId[];
  force?: boolean;
}

const TML_SKILL_REPOSITORY = 'https://github.com/Time-Machine-Lab/TML-Skills';
const TML_SKILL_DEFINITIONS = [
  {
    id: 'tml-docs-spec-generate',
    repositoryPath: 'Time-Machine-Lab/TML-Skills/skills/tml-docs-spec-generate'
  }
];

function assertValidSelections(answers: InitOverrides): void {
  const validTools = new Set(Tool_OPTIONS_IDS);

  if (answers.tools?.some((tool) => !validTools.has(tool))) {
    throw new Error(`Invalid tool id. Supported tools: ${Tool_OPTIONS_IDS.join(', ')}`);
  }

  if (answers.tools && answers.tools.length > 1) {
    throw new Error('Only one IDE can be selected. Please provide a single tool id.');
  }
}

const Tool_OPTIONS_IDS = TOOL_OPTIONS.map((tool) => tool.id);

function parseMultiValue<T extends string>(value: string | undefined): T[] | undefined {
  if (!value) {
    return undefined;
  }

  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean) as T[];
}

function getToolOptionById(toolId: ToolId): ToolOption {
  const tool = TOOL_OPTIONS.find((option) => option.id === toolId);
  if (!tool) {
    throw new Error(`Unsupported tool id: ${toolId}`);
  }

  return tool;
}

function resolveGeneratedFilePath(projectRoot: string, relativePath: string): string {
  return path.isAbsolute(relativePath)
    ? relativePath
    : path.join(projectRoot, relativePath);
}

function buildToolCommandFileName(toolId: ToolId, command: TmlCommandDefinition): string {
  if (toolId === 'github-copilot') {
    return `${command.id}.prompt.md`;
  }

  if (toolId === 'gemini') {
    return `${command.id}.toml`;
  }

  return `${command.id}.md`;
}

function buildToolCommandContent(toolId: ToolId, command: TmlCommandDefinition): string {
  const markdown = buildCommandMarkdownByFileName(command.fileName);

  if (toolId === 'gemini') {
    return buildGeminiTomlCommand(command.id, command.description, markdown);
  }

  return markdown;
}

function generateCommonCommandFiles(tool: ToolOption): GeneratedCommandFile[] {
  return TML_COMMAND_DEFINITIONS.map((command) => ({
    relativePath: buildNamespacedCommandPath(tool.directory, buildToolCommandFileName(tool.id, command)),
    content: buildToolCommandContent(tool.id, command)
  }));
}

async function collectProjectRoot(overrides: InitOverrides): Promise<string> {
  const projectRoot = overrides.projectRoot
    ?? await input({
      message: 'Where should the spec workspace be initialized?',
      default: process.cwd()
    });

  return path.resolve(projectRoot);
}

async function collectTool(overrides: InitOverrides): Promise<ToolId> {
  if (overrides.tools?.length) {
    return overrides.tools[0];
  }

  return select<ToolId>({
    message: 'Select IDE',
    choices: TOOL_OPTIONS.map((tool) => ({
      name: `${tool.label} (${tool.directory})`,
      value: tool.id
    }))
  });
}

async function collectForce(overrides: InitOverrides): Promise<boolean> {
  const force = overrides.force
    ?? await confirm({
      message: 'Overwrite files if they already exist?',
      default: false
    });

  return force;
}

async function collectCodingMode(): Promise<'vibe' | 'openspec'> {
  return select<'vibe' | 'openspec'>({
    message: 'Select AI Coding Mode',
    choices: [
      {
        name: 'Vibe Coding (Lightweight, no OpenSpec installation)',
        value: 'vibe'
      },
      {
        name: 'OpenSpec (Structured workflow, installs OpenSpec)',
        value: 'openspec'
      }
    ]
  });
}

function resolveSkillRoot(projectRoot: string, toolDirectory: string): string {
  const normalizedDirectory = toolDirectory.replace(/[\\/]+$/, '');
  const resolvedBaseDirectory = normalizedDirectory.startsWith('~/')
    ? path.join(homedir(), normalizedDirectory.slice(2))
    : normalizedDirectory;
  const baseDirectory = path.isAbsolute(resolvedBaseDirectory)
    ? resolvedBaseDirectory
    : path.join(projectRoot, resolvedBaseDirectory);
  const tail = path.basename(baseDirectory);

  if (tail === 'commands' || tail === 'prompts') {
    return path.join(path.dirname(baseDirectory), 'skills');
  }

  return path.join(baseDirectory, 'skills');
}

async function installTmlSkills(projectRoot: string, toolDirectory: string): Promise<number> {
  const skillRootPath = resolveSkillRoot(projectRoot, toolDirectory);
  let installedCount = 0;

  for (const skill of TML_SKILL_DEFINITIONS) {
    const destinationPath = path.join(skillRootPath, skill.id);
    console.log(`安装 ${skill.id} (${TML_SKILL_REPOSITORY})...`);

    try {
      await downloadSkill(skill.repositoryPath, destinationPath);
      installedCount += 1;
    } catch (error) {
      console.error(`安装 ${skill.id} 失败:`, error);
    }
  }

  return installedCount;
}

export async function runInit(overrides: InitOverrides = {}): Promise<void> {
  assertValidSelections(overrides);

  if (!overrides.tools || !overrides.projectRoot) {
    await playIntroAnimation();
  }

  const projectRoot = await collectProjectRoot(overrides);

  const docsScaffoldResults = await scaffoldDirectories(projectRoot, [
    'docs/api',
    'docs/sql',
    'docs/design',
    'docs/spec'
  ]);

  for (const result of docsScaffoldResults) {
    if (result.directoryCreated) {
      console.log(`created: ${result.directory}`);
    } else {
      console.log(`skipped: ${result.directory} (already exists)`);
    }
  }

  const toolId = await collectTool(overrides);
  const tool = getToolOptionById(toolId);

  console.log('安装 TML commands...');
  let writtenCommands = 0;
  let skippedCommands = 0;
  const files = generateCommonCommandFiles(tool);

  const force = await collectForce(overrides);
  for (const file of files) {
    const targetPath = resolveGeneratedFilePath(projectRoot, file.relativePath);

    if (await writeTextFile(targetPath, file.content, force)) {
      writtenCommands += 1;
    } else {
      skippedCommands += 1;
    }
  }
  console.log(`TML commands 安装完成 (created: ${writtenCommands}, skipped: ${skippedCommands})`);

  console.log('安装 TML skills...');
  const installedCount = await installTmlSkills(projectRoot, tool.directory);
  if (installedCount === TML_SKILL_DEFINITIONS.length) {
    console.log(`TML skills 安装完成: ${TML_SKILL_DEFINITIONS.map((skill) => skill.id).join(', ')}`);
  } else {
    console.log(`TML skills 安装部分完成 (${installedCount}/${TML_SKILL_DEFINITIONS.length})，请稍后重试。`);
  }

  const codingMode = await collectCodingMode();

  if (codingMode === 'openspec') {
    console.log('检查 OpenSpec 依赖...');
    const hasOpenSpec = await checkCommandExists('openspec');
    if (!hasOpenSpec) {
      console.log('未检测到 OpenSpec，正在全局安装 @fission-ai/openspec@latest...');
      try {
        await runCommand('npm install -g @fission-ai/openspec@latest');
        console.log('OpenSpec 安装完成。');
      } catch (error) {
        console.error('OpenSpec 安装失败，请稍后手动安装。');
      }
    }

    try {
      console.log('执行 OpenSpec 初始化...');
      await runCommand(`openspec init --tools ${toolId} "${projectRoot}" --force`);
      console.log('OpenSpec 初始化完成。');
    } catch (error) {
      console.error('OpenSpec 初始化时发生错误。');
    }
  }

  console.log('\n✨ TML Workspace Setup Complete! 🎉\n');
}

export function parseInitOverrides(options: {
  projectRoot?: string;
  tools?: string;
  force?: boolean;
}): InitOverrides {
  return {
    projectRoot: options.projectRoot,
    tools: parseMultiValue<ToolId>(options.tools),
    force: options.force
  };
}
