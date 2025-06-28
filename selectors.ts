// selectors.ts

export const LoginSelectors = {
  emailInput: '#Email',
  passwordInput: '#Password',
  loginButton: 'input[value="Log in"]',
  accountLabel: '.account',
  loginError: '.message-error',
  validationError: '.validation-summary-errors',
  logoutLink: 'a[href="/logout"]',
  loginLink: 'a[href="/login"]',
};

export const RegisterSelectors = {
  genderFemaleRadio: '#gender-female',
  firstNameInput: '#FirstName',
  lastNameInput: '#LastName',
  emailInput: '#Email',
  passwordInput: '#Password',
  confirmPasswordInput: '#ConfirmPassword',
  registerButton: '#register-button',
  registrationResult: '.result',
};
