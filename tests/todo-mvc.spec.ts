import { test, expect } from '@playwright/test';

test('TodoMVC basic flow', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/#/');

  await page.fill('.new-todo', 'Buy milk');
  await page.press('.new-todo', 'Enter');

  await expect(page.locator('.todo-list li')).toHaveText(['Buy milk']);
});
