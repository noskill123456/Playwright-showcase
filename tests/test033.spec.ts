import { test, expect } from '@playwright/test';

test('Test 033 - wikipedia main has search input', async ({ page, request }) => {
  await page.goto('https://www.wikipedia.org');
  await page.setViewportSize({width:375,height:812}); await expect(page.locator('nav')).toBeVisible();
});
