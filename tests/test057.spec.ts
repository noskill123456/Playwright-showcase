import { test, expect } from '@playwright/test';

test('Test 057 - npmjs has search', async ({ page, request }) => {
  await page.goto('https://www.npmjs.com');
  await expect(page.locator('input[type="search"]')).toBeVisible();
});
