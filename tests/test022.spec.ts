import { test, expect } from '@playwright/test';

test('Test 022 - playwright site has nav', async ({ page, request }) => {
  await page.goto('https://playwright.dev');
  await page.setViewportSize({width:375,height:812}); await expect(page.locator('nav')).toBeVisible();
});
