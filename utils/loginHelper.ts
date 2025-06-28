// utils/loginHelper.ts

import { LoginPage } from '../pages/loginPage';
import { readFileSync } from 'fs';

export async function loginWithCredentials(page, email: string, password: string) {
  const login = new LoginPage(page);
  await login.navigate();
  await login.enterEmail(email);
  await login.enterPassword(password);
  await login.submit();
}

export async function loginAsRegisteredUser(page) {
  const { email, password } = JSON.parse(readFileSync('testData.json', 'utf-8'));
  await loginWithCredentials(page, email, password);
}
