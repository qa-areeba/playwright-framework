// utils/loginHelper.ts

import { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

export async function loginWithCredentials(page: Page, email: string, password: string) {
  const login = new LoginPage(page);
  await login.navigate();
  await login.enterEmail(email);
  await login.enterPassword(password);
  await login.submit();
}
