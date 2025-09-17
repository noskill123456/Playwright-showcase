import { test, expect } from '@playwright/test';

test('Google search works', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('textarea[name="q"]', 'Playwright testing');
  await page.press('textarea[name="q"]', 'Enter');
  await expect(page.locator('#search')).toContainText('playwright.dev');
});
