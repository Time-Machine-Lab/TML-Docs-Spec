export const COMMAND_NAMESPACE = 'tml-spec';

export function buildNamespacedCommandPath(baseDirectory: string, fileName: string): string {
  return `${baseDirectory}${COMMAND_NAMESPACE}/${fileName}`;
}