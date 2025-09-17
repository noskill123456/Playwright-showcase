import { test, expect } from '@playwright/test';

test('Test 088 - stackoverflow has search box', async ({ page, request }) => {
  await page.goto('https://stackoverflow.com');
  await page.setViewportSize({width:375,height:812}); await expect(page.locator('nav')).toBeVisible();
});
