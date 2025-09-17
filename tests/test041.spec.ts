import { test, expect } from '@playwright/test';

test('Test 041 - bing search box', async ({ page, request }) => {
  await page.goto('https://www.bing.com');
  await expect(page.locator('input[name="q"]')).toBeVisible();
});
