// registerPage.ts

import { Page } from '@playwright/test';
import { RegisterSelectors } from '../selectors';

export class RegisterPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://demowebshop.tricentis.com/register');
  }

  async selectGender(gender: 'male' | 'female') {
    await this.page.check(`input[id="gender-${gender}"]`);
  }

  async fillName(firstName: string, lastName: string) {
    await this.page.fill(RegisterSelectors.firstNameInput, firstName);
    await this.page.fill(RegisterSelectors.lastNameInput, lastName);
  }

  async fillEmail(email: string) {
    await this.page.fill(RegisterSelectors.emailInput, email);
  }

  async fillPassword(password: string) {
    await this.page.fill(RegisterSelectors.passwordInput, password);
    await this.page.fill(RegisterSelectors.confirmPasswordInput, password);
  }

  async submit() {
    await this.page.click(RegisterSelectors.registerButton);
  }

  async getRegistrationResult(): Promise<string> {
    return (await this.page.textContent(RegisterSelectors.registrationResult)) || '';
  }
}
