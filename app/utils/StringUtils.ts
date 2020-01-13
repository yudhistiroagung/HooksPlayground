export function createIntialName(name: string = 'None'): string {
  const splited: string[] = name.split(' ');
  if (splited.length <= 1) {
    return splited[0][0];
  }

  return `${splited[0][0]}${splited[1][0]}`;
}
