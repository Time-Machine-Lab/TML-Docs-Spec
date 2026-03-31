import { access, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

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