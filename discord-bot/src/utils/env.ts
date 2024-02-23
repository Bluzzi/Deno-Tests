import "dotenv-loader";

export function getStringEnv(name: string): string {
  const env = Deno.env.get(name);

  if (!env) throw new Error(`Missing environment variable : ${name}`);

  return env;
}

export function getNumberEnv(name: string): number {
  try {
    return +getStringEnv(name); // Number
  } catch {
    throw new Error(`Environment variable ${name} is not a number`);
  }
}