import { test, expect } from '@playwright/test';

test('Test 035 - github shows Sign in', async ({ page, request }) => {
  await page.goto('https://github.com');
  await page.waitForTimeout(500); // small wait for demo
  await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
});
