import { test, expect } from '@playwright/test';

test('DuckDuckGo search works', async ({ page }) => {
  await page.goto('https://duckduckgo.com');
  await page.fill('input[name="q"]', 'Playwright JS');
  await page.press('input[name="q"]', 'Enter');
  await expect(page.locator('#links')).toContainText('playwright.dev');
});
