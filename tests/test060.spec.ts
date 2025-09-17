import { test, expect } from '@playwright/test';

test('Test 060 - httpbin 200', async ({ page, request }) => {
  await page.goto('https://httpbin.org/status/200');
  const r = await request.get('https://httpbin.org/status/200'); expect(r.status()).toBe(200);
});
