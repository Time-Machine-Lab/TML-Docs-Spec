export const COMMAND_PREFIX = 'tml-';

export function buildNamespacedCommandPath(baseDirectory: string, fileName: string): string {
  return `${baseDirectory}${COMMAND_PREFIX}${fileName}`;
}