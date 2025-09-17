import { test, expect } from '@playwright/test';

test('Test 018 - wikipedia main has search input', async ({ page, request }) => {
  await page.goto('https://www.wikipedia.org');
  await expect(page.locator('input[name="search"]')).toBeVisible();
});
