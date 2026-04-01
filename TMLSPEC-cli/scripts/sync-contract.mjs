import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(currentDir, '..');
const sourceDir = path.resolve(packageRoot, '..', 'contract');
const targetDir = path.join(packageRoot, 'contract');

if (!existsSync(sourceDir)) {
  throw new Error(`Contract source directory does not exist: ${sourceDir}`);
}

rmSync(targetDir, { recursive: true, force: true });
mkdirSync(packageRoot, { recursive: true });
cpSync(sourceDir, targetDir, { recursive: true });

console.log(`Synchronized contract directory to ${targetDir}`);