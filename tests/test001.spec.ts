import { test, expect } from '@playwright/test';

test('Test 001 - has title Example Domain', async ({ page, request }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

test('Test 002 - page return 200', async ({request})  => {
  const response = await request.get('https://example.com');
  expect(response.status()).toBe(200);
});