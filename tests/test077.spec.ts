import { test, expect } from '@playwright/test';

test('Test 077 - httpbin GET returns url', async ({ page, request }) => {
  await page.goto('https://httpbin.org/get');
  await page.waitForTimeout(500); // small wait for demo
  await page.setViewportSize({width:375,height:812}); await expect(page.locator('nav')).toBeVisible();
});
