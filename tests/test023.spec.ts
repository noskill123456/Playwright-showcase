import { test, expect } from '@playwright/test';

test('Test 023 - todo mvc add item', async ({ page, request }) => {
  await page.goto('https://todomvc.com/examples/react/#/');
  await page.fill('.new-todo','Demo task'); await page.press('.new-todo','Enter'); await expect(page.locator('.todo-list li')).toHaveText(['Demo task']);
});
