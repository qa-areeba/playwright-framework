// utils/testDataUtil.ts

import { readFileSync } from 'fs';
import path from 'path';

export function getRegisteredUserCredentials(): { email: string; password: string } {
  const filePath = path.resolve(__dirname, '../data/testData.json');
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}
