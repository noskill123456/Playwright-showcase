import { test, expect } from '@playwright/test';

test('Test 042 - npmjs has search', async ({ page, request }) => {
  await page.goto('https://www.npmjs.com');
  await page.waitForTimeout(500); // small wait for demo
  await expect(page.locator('input[type="search"]')).toBeVisible();
});
