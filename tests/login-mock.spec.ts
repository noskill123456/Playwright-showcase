import { test, expect } from '@playwright/test';

test('Mocked login API response', async ({ page }) => {
  await page.route('**/api/login', async route => {
    await route.fulfill({
      status: 200,
      body: JSON.stringify({ token: 'fake-jwt-token' }),
    });
  });

  await page.goto('https://example.com/login');
  // Demo: tady by se vyplnil formulář a volala API
  expect(true).toBeTruthy();
});
