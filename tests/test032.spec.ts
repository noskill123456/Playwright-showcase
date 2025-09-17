import { test, expect } from '@playwright/test';

test('Test 032 - httpbin GET returns url', async ({ page, request }) => {
  await page.goto('https://httpbin.org/get');
  const resp = await request.get('https://httpbin.org/get'); expect(resp.ok()).toBeTruthy(); const body = await resp.json(); expect(body.url).toBe('https://httpbin.org/get');
});
