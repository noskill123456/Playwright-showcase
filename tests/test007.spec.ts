import { test, expect } from '@playwright/test';

test('Test 007 - playwright site has nav', async ({ page, request }) => {
  await page.goto('https://playwright.dev');
  await page.waitForTimeout(500); // small wait for demo
  await expect(page.locator('nav')).toBeVisible();
});
