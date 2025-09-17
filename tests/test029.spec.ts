import { test, expect } from '@playwright/test';

test('Test 029 - hn front page title', async ({ page, request }) => {
  await page.goto('https://news.ycombinator.com');
  await expect(page).toHaveTitle(/Hacker News/);
});
