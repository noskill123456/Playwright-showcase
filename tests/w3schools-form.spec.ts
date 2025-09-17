import { test, expect } from '@playwright/test';

test('Form submission works on W3Schools demo', async ({ page }) => {
  await page.goto('https://www.w3schools.com/html/html_forms.asp');
  await page.fill('input[name="firstname"]', 'Ladislav');
  await page.fill('input[name="lastname"]', 'Novotny');
  await page.click('input[type="submit"]');
  await expect(page).toHaveURL(/action_page/);
});
