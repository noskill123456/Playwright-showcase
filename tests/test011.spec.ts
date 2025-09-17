import { test, expect } from '@playwright/test';

test('Test 011 - bing search box', async ({ page, request }) => {
  await page.goto('https://www.bing.com');
  await page.setViewportSize({width:375,height:812}); await expect(page.locator('nav')).toBeVisible();
});
