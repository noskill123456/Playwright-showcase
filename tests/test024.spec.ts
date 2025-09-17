import { test, expect } from '@playwright/test';

test('Test 024 - w3schools form fields', async ({ page, request }) => {
  await page.goto('https://www.w3schools.com/html/html_forms.asp');
  await expect(page.locator('input[name="firstname"]')).toBeVisible();
});
