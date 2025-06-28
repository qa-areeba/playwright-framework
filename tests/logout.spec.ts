import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { getRegisteredUserCredentials } from '../utils/testDataUtil';

test('User can log out successfully', async ({ page }) => {
  const { email, password } = getRegisteredUserCredentials();

  const login = new LoginPage(page);

  // Login steps
  await login.navigate();
  await login.enterEmail(email);
  await login.enterPassword(password);
  await login.submit();

  const accounts = await login.getAccountTexts();
  expect(accounts, 'Should display logged-in user email').toContain(email);

  // Logout step
  await login.logout();

  // Post-logout check — Log in link should reappear
  await expect(page.locator('a[href="/login"]'), 'Log in link should be visible after logout').toBeVisible();
});
