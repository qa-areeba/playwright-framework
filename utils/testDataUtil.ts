import { readFileSync, existsSync } from 'fs';
import path from 'path';

export function getRegisteredUserCredentials(): { email: string; password: string } {
  const filePath = path.resolve(__dirname, '../data/testData.json');
  if (!existsSync(filePath)) throw new Error('testData.json not found.');
  
  const raw = readFileSync(filePath, 'utf-8');
  if (!raw.trim()) throw new Error('testData.json is empty.');

  return JSON.parse(raw);
}
