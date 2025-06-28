// loginPage.ts

import { Page } from '@playwright/test';
import { LoginSelectors } from '../selectors';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://demowebshop.tricentis.com/login');
  }

  async enterEmail(email: string) {
    await this.page.fill(LoginSelectors.emailInput, email);
  }

  async enterPassword(password: string) {
    await this.page.fill(LoginSelectors.passwordInput, password);
  }

  async submit() {
    await this.page.click(LoginSelectors.loginButton);
  }

  async getAccountTexts(): Promise<string[]> {
    await this.page.waitForSelector(LoginSelectors.accountLabel);
    return await this.page.locator(LoginSelectors.accountLabel).allTextContents();
  }

  async logout() {
    await this.page.click(LoginSelectors.logoutLink);
  }
}
