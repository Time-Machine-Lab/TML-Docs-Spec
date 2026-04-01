import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

export async function checkCommandExists(command: string): Promise<boolean> {
  try {
    await execAsync(`${command} --version`);
    return true;
  } catch {
    return false;
  }
}

export async function runCommand(command: string, options = {}): Promise<void> {
  const { stdout, stderr } = await execAsync(command, options);
  if (stdout) console.log(stdout.trim());
  if (stderr) console.error(stderr.trim());
}