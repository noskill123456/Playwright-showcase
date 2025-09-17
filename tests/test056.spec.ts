import { test, expect } from '@playwright/test';

test('Test 056 - bing search box', async ({ page, request }) => {
  await page.goto('https://www.bing.com');
  await page.waitForTimeout(500); // small wait for demo
  await expect(page.locator('input[name="q"]')).toBeVisible();
});
