import { test, expect } from '@playwright/test';

test('Test 021 - duckduckgo search works', async ({ page, request }) => {
  await page.goto('https://duckduckgo.com');
  await page.waitForTimeout(500); // small wait for demo
  await page.fill('input[name="q"]','playwright'); await page.press('input[name="q"]','Enter'); await expect(page.locator('#links')).toBeVisible();
});
