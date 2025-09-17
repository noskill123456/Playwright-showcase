import { test, expect } from '@playwright/test';

test('Test 066 - duckduckgo search works', async ({ page, request }) => {
  await page.goto('https://duckduckgo.com');
  await page.setViewportSize({width:375,height:812}); await expect(page.locator('nav')).toBeVisible();
});
