import { test, expect } from '@playwright/test';

test('Test 099 - w3schools form fields', async ({ page, request }) => {
  await page.goto('https://www.w3schools.com/html/html_forms.asp');
  await page.setViewportSize({width:375,height:812}); await expect(page.locator('nav')).toBeVisible();
});
