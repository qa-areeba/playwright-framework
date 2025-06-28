import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: process.env.CI ? true : false, // ✅ Headless in CI, visible locally
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
  reporter: [['html', { open: 'never' }]],
});
