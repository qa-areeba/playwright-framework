import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { invalidLoginData } from '../data/invalidLoginData';
import { ErrorMessages } from '../messages'; // ✅ import error messages

test.describe('Data-Driven Negative Login Tests', () => {
  invalidLoginData.forEach((creds, index) => {
    test(`[#${index + 1}] Should show error for ${creds.reason}`, async ({ page }) => {
      const login = new LoginPage(page);
      await login.navigate();
      await login.enterEmail(creds.email);
      await login.enterPassword(creds.password);
      await login.submit();

      const errorLocator = page.locator('.message-error, .validation-summary-errors').first();
      await expect(errorLocator).toBeVisible();
      await expect(errorLocator).toContainText(ErrorMessages.loginFailed); // ✅ centralized message

      const errorMessages = await errorLocator.allTextContents();
      console.log(`🔴 [#${index + 1} | ${creds.reason}] Error(s) displayed:`, errorMessages);
    });
  });
});
