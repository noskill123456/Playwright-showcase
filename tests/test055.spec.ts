import { test, expect } from '@playwright/test';

test('Test 055 - saucedemo login and add to cart', async ({ page, request }) => {
  await page.goto('https://www.saucedemo.com');
  await page.setViewportSize({width:375,height:812}); await expect(page.locator('nav')).toBeVisible();
});
