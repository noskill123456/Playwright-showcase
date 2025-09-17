import { test, expect } from '@playwright/test';

test('Test 073 - stackoverflow has search box', async ({ page, request }) => {
  await page.goto('https://stackoverflow.com');
  await expect(page.locator('input[name="q"]')).toBeVisible();
});
