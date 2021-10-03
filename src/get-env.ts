export function getEnv(key: string): string {
  if (process?.env[key]) {
    return process?.env[key] as string;
  }

  console.error(`Environment Variable ${key} is undefined.`);
  throw new Error(`Environment Variable ${key} is undefined.`);
}
