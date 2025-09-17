import { test, expect } from '@playwright/test';

test('Test 063 - wikipedia main has search input', async ({ page, request }) => {
  await page.goto('https://www.wikipedia.org');
  await page.waitForTimeout(500); // small wait for demo
  await expect(page.locator('input[name="search"]')).toBeVisible();
});
