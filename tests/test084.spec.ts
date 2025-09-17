import { test, expect } from '@playwright/test';

test('Test 084 - w3schools form fields', async ({ page, request }) => {
  await page.goto('https://www.w3schools.com/html/html_forms.asp');
  await page.waitForTimeout(500); // small wait for demo
  await expect(page.locator('input[name="firstname"]')).toBeVisible();
});
