import { test, expect } from '@playwright/test';

test('Test 044 - hn front page title', async ({ page, request }) => {
  await page.goto('https://news.ycombinator.com');
  await page.setViewportSize({width:375,height:812}); await expect(page.locator('nav')).toBeVisible();
});
