import { test, expect } from '@playwright/test';

test('Test 096 - duckduckgo search works', async ({ page, request }) => {
  await page.goto('https://duckduckgo.com');
  await page.fill('input[name="q"]','playwright'); await page.press('input[name="q"]','Enter'); await expect(page.locator('#links')).toBeVisible();
});
