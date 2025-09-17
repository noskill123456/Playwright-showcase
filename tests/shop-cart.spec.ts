import { test, expect } from '@playwright/test';

test('Add product to cart on demo shop', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await page.click('.inventory_item:first-child button');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});
