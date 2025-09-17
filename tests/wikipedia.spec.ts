import { test, expect } from '@playwright/test';

test('Wikipedia article loads', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Playwright');
  const heading = page.locator('#firstHeading');
  await expect(heading).toHaveText('Playwright');
});
