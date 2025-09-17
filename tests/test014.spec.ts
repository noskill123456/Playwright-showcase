import { test, expect } from '@playwright/test';

test('Test 014 - hn front page title', async ({ page, request }) => {
  await page.goto('https://news.ycombinator.com');
  await page.waitForTimeout(500); // small wait for demo
  await expect(page).toHaveTitle(/Hacker News/);
});
