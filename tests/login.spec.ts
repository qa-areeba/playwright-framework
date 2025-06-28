import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import path from 'path';
import { loginWithCredentials } from '../utils/loginHelper';
import { LoginPage } from '../pages/loginPage';

test('Login with a registered user', async ({ page }) => {
  const filePath = path.resolve(__dirname, '../data/testData.json');
  const { email, password } = JSON.parse(readFileSync(filePath, 'utf-8'));

  await loginWithCredentials(page, email, password);

  const login = new LoginPage(page);
  const accountLinks = await login.getAccountTexts();
  console.log('Account links found:', accountLinks);

  expect(accountLinks).toContain(email);
});
