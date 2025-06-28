import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

const invalidCredentials = {
  validEmail: 'qa@example.com',
  wrongPassword: 'WrongPass123',
};

test.describe('Negative Login Tests', () => {
  test('Login with incorrect password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.enterEmail(invalidCredentials.validEmail);
    await login.enterPassword(invalidCredentials.wrongPassword);
    await login.submit();

    const errorMessage = page.locator('.message-error');
    await expect(errorMessage, 'Should display error for wrong credentials').toContainText('Login was unsuccessful');
  });

  test('Login with empty credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.submit();

    const validationSummary = page.locator('.validation-summary-errors');
    await expect(validationSummary, 'Should show validation for empty form').toBeVisible();
  });
});
