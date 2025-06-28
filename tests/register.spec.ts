import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/registerPage';
import { writeFileSync } from 'fs';
import path from 'path';
import { SuccessMessages } from '../messages';
import { generateUniqueEmail } from '../utils/generateUniqueEmail';

test('Register a new user', async ({ page }) => {
  const register = new RegisterPage(page);
  const firstName = 'A';
  const lastName = 'Z';
  const password = 'Test@1234';
  const uniqueEmail = generateUniqueEmail();

  // ✅ Use path.resolve to ensure portability across environments
  const filePath = path.resolve(__dirname, '../data/testData.json');
  writeFileSync(filePath, JSON.stringify({ email: uniqueEmail, password }, null, 2));

  await register.navigate();
  await register.selectGender('female');
  await register.fillName(firstName, lastName);
  await register.fillEmail(uniqueEmail);
  await register.fillPassword(password);
  await register.submit();

  await expect(
    page.locator('.result'),
    'Should confirm registration success'
  ).toHaveText(SuccessMessages.registrationComplete);
});
