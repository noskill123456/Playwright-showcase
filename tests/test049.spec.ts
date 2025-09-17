import { test, expect } from '@playwright/test';

test('Test 049 - wikipedia Playwright heading', async ({ page, request }) => {
  await page.goto('https://en.wikipedia.org/wiki/Playwright');
  await page.waitForTimeout(500); // small wait for demo
  await expect(page.locator('#firstHeading')).toHaveText(/Playwright/);
});
