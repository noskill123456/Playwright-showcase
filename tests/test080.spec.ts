import { test, expect } from '@playwright/test';

test('Test 080 - github shows Sign in', async ({ page, request }) => {
  await page.goto('https://github.com');
  await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
});
