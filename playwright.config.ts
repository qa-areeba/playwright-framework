import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
  reporter: [['html', { open: 'never' }]], // Add this block to enable HTML reports
});
