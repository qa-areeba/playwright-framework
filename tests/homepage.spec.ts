// Importing Playwright's core test functions
import { test, expect } from '@playwright/test';

// Configure this specific test to launch the browser in full-screen mode
test.use({
  launchOptions: {
    args: ['--start-maximized'], // Instructs Chrome to start maximized
  },
  viewport: null, // Removes default viewport size — allows browser to render full screen based on device
});

// Define a test case with tags embedded in the title for filtering (`@homepage`, `@smoke`)
test('[@homepage @smoke] Homepage title should match expected value', async ({ page }) => {
  
  // Navigate to the demo web shop homepage
  await page.goto('https://demowebshop.tricentis.com');
  
  // Assertion: Verifies that the page title contains the phrase "Demo Web Shop"
  // Using a regex here provides flexibility if the title format changes slightly
  await expect(page).toHaveTitle(/Demo Web Shop/);
});
