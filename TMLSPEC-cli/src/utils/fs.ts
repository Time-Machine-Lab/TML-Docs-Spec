import { access, cp, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import degit from 'degit';

export interface ScaffoldDirectoryResult {
  directory: string;
  directoryCreated: boolean;
  gitkeepCreated: boolean;
}

export async function ensureDirectory(dirPath: string): Promise<void> {
  await mkdir(dirPath, { recursive: true });
}

export async function pathExists(targetPath: string): Promise<boolean> {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

export async function writeTextFile(filePath: string, content: string, overwrite = true): Promise<boolean> {
  if (!overwrite && await pathExists(filePath)) {
    return false;
  }

  await ensureDirectory(path.dirname(filePath));
  await writeFile(filePath, content, 'utf8');
  return true;
}

export async function scaffoldDirectories(projectRoot: string, directories: string[]): Promise<ScaffoldDirectoryResult[]> {
  const results: ScaffoldDirectoryResult[] = [];

  for (const dir of directories) {
    const fullPath = path.join(projectRoot, dir);
    const directoryExists = await pathExists(fullPath);
    await ensureDirectory(fullPath);

    const gitkeepPath = path.join(fullPath, '.gitkeep');
    const gitkeepExists = await pathExists(gitkeepPath);

    if (!gitkeepExists) {
      await writeFile(gitkeepPath, '', 'utf8');
    }

    results.push({
      directory: dir,
      directoryCreated: !directoryExists,
      gitkeepCreated: !gitkeepExists
    });
  }

  return results;
}

export async function downloadSkill(repositoryPath: string, destPath: string): Promise<void> {
  const emitter = degit(repositoryPath, {
    cache: false,
    force: true,
    verbose: true
  });
  await emitter.clone(destPath);
}
