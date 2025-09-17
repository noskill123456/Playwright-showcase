import { test, expect } from '@playwright/test';

test('Test 028 - stackoverflow has search box', async ({ page, request }) => {
  await page.goto('https://stackoverflow.com');
  await page.waitForTimeout(500); // small wait for demo
  await expect(page.locator('input[name="q"]')).toBeVisible();
});
