import dotenv from 'dotenv';

dotenv.config();

export function getEnvVar(name, defaultName) {
  const value = process.env[name];
  if (value) return value;
  if (defaultName) return defaultName;
  throw new Error(`Missing: process.env['${name}']`);
}
