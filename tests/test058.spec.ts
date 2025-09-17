import { test, expect } from '@playwright/test';

test('Test 058 - stackoverflow has search box', async ({ page, request }) => {
  await page.goto('https://stackoverflow.com');
  await expect(page.locator('input[name="q"]')).toBeVisible();
});
