import { access, cp, mkdir, rm, writeFile } from 'node:fs/promises';
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

export async function copyDirectory(sourcePath: string, targetPath: string, overwrite = true): Promise<boolean> {
  if (!await pathExists(sourcePath)) {
    throw new Error(`Source directory does not exist: ${sourcePath}`);
  }

  if (!overwrite && await pathExists(targetPath)) {
    return false;
  }

  if (overwrite && await pathExists(targetPath)) {
    await rm(targetPath, { recursive: true, force: true });
  }

  await ensureDirectory(path.dirname(targetPath));
  await cp(sourcePath, targetPath, { recursive: true, force: overwrite });
  return true;
}