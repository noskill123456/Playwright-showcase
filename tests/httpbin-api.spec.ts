import { test, expect } from '@playwright/test';

test('HTTPBin GET request', async ({ request }) => {
  const response = await request.get('https://httpbin.org/get');
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body.url).toBe('https://httpbin.org/get');
});
