import { Command } from 'commander';
import { TOOL_OPTIONS } from '../core/catalog.js';
import { parseInitOverrides, runInit } from '../core/init.js';

const program = new Command();

program
  .name('tml-spec')
  .description('Initialize team spec workflows and tool-specific commands.')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize a TML spec workspace in the current or target directory.')
  .option('--project-root <path>', 'Target directory for generated files')
  .option(
    '--tools <ids>',
    `Comma-separated tools: ${TOOL_OPTIONS.map((tool) => tool.id).join(', ')}`
  )
  .option('--force', 'Allow overwriting existing files', false)
  .action(async (options) => {
    await runInit(parseInitOverrides(options));
  });

await program.parseAsync(process.argv);