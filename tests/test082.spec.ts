import { test, expect } from '@playwright/test';

test('Test 082 - playwright site has nav', async ({ page, request }) => {
  await page.goto('https://playwright.dev');
  await expect(page.locator('nav')).toBeVisible();
});
