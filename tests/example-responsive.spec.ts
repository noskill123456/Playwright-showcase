import { test, expect } from '@playwright/test';

test('Responsive check on playwright.dev', async ({ page }) => {
  await page.goto('https://playwright.dev');

  await page.setViewportSize({ width: 375, height: 812 }); // iPhone X
  await expect(page.locator('nav')).toBeVisible();

  await page.setViewportSize({ width: 1920, height: 1080 });
  await expect(page.locator('nav')).toBeVisible();
});
