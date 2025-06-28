// utils/testDataUtil.ts

import { readFileSync } from 'fs';

export function getRegisteredUserCredentials(): { email: string; password: string } {
  return JSON.parse(readFileSync('testData.json', 'utf-8'));
}
