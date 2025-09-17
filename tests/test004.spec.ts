import { test, expect } from '@playwright/test';

test('Test 004 - wikipedia Playwright heading', async ({ page, request }) => {
  await page.goto('https://en.wikipedia.org/wiki/Playwright');
  await expect(page.locator('#firstHeading')).toHaveText(/Playwright/);
});
