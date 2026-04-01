import path from 'node:path';
import { checkbox, confirm, input } from '@inquirer/prompts';
import { getAdapter } from './adapters/index.js';
import { TOOL_OPTIONS } from './catalog.js';
import type { InitAnswers, ToolId } from './types.js';
import { writeTextFile } from '../utils/fs.js';

interface InitOverrides {
  projectRoot?: string;
  tools?: ToolId[];
  force?: boolean;
}

function assertValidSelections(answers: InitOverrides): void {
  const validTools = new Set(Tool_OPTIONS_IDS);

  if (answers.tools?.some((tool) => !validTools.has(tool))) {
    throw new Error(`Invalid tool id. Supported tools: ${Tool_OPTIONS_IDS.join(', ')}`);
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

async function collectAnswers(overrides: InitOverrides): Promise<InitAnswers> {
  assertValidSelections(overrides);

  const projectRoot = overrides.projectRoot
    ?? await input({
      message: 'Where should the spec workspace be initialized?',
      default: process.cwd()
    });

  const tools = overrides.tools?.length
    ? overrides.tools
    : await checkbox<ToolId>({
        message: 'Select IDEs or tools to initialize',
        required: true,
        choices: TOOL_OPTIONS.map((tool) => ({
          name: `${tool.label} (${tool.directory})`,
          value: tool.id
        }))
      });

  const force = overrides.force
    ?? await confirm({
      message: 'Overwrite files if they already exist?',
      default: false
    });

  return {
    projectRoot: path.resolve(projectRoot),
    tools,
    force
  };
}

export async function runInit(overrides: InitOverrides = {}): Promise<void> {
  const answers = await collectAnswers(overrides);
  let writtenFiles = 0;
  let skippedFiles = 0;

  for (const tool of answers.tools) {
    const adapter = getAdapter(tool);
    const files = adapter.generateFiles();

    for (const file of files) {
      if (await writeTextFile(path.join(answers.projectRoot, file.relativePath), file.content, answers.force)) {
        writtenFiles += 1;
      } else {
        skippedFiles += 1;
      }
    }
  }

  const relativeRoot = path.relative(process.cwd(), answers.projectRoot) || '.';
  console.log('TML Spec 命令已初始化。');
  console.log(`项目根目录: ${relativeRoot}`);
  console.log(`已选择工具: ${answers.tools.join(', ')}`);
  console.log(`写入文件数: ${writtenFiles}`);
  console.log(`跳过文件数: ${skippedFiles}`);
  console.log('下一步:');
  console.log('1. 在你的 IDE 中打开生成的命令或 prompt 文件。');
  console.log('2. 使用 tml-spec 命名空间下的 project 命令处理项目级文档工作。');
  console.log('3. 使用 tml-spec 命名空间下的 requirement 命令处理需求级工作，并路由到 openspec。');
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