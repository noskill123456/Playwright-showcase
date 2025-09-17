import { test, expect } from '@playwright/test';

test('GitHub homepage shows sign in button', async ({ page }) => {
  await page.goto('https://github.com');
  await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
});
