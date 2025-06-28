export const invalidLoginData = [
  { email: 'wrong@example.com', password: 'Test@1234', reason: 'invalid email' },
  { email: 'qa@example.com', password: 'WrongPass', reason: 'wrong password' },
  { email: '', password: '', reason: 'missing both fields' },
  { email: 'qa@example.com', password: '', reason: 'missing password' },
  { email: '', password: 'Test@1234', reason: 'missing email' },
];

