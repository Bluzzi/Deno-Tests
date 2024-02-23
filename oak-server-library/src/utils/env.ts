import { config } from "dotenv";

export function getStringEnv(name: string): string {
  const env = config()[name];

  if (!env) throw new Error(`Missing environment variable : ${name}`);

  return env;
}

export function getNumberEnv(name: string): number {
  try {
    const env = +getStringEnv(name);

    return env;
  } catch {
    throw new Error(`Environment variable ${name} is not a number`);
  }
}