export function delay(timeout: number = 100): Promise<void> {
  return new Promise((res: () => void) => {
    setTimeout(() => {
      res();
    }, timeout);
  });
}
