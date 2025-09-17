import { test, expect } from '@playwright/test';

test('Test 046 - has title Example Domain', async ({ page, request }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
