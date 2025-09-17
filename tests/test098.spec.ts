import { test, expect } from '@playwright/test';

test('Test 098 - todo mvc add item', async ({ page, request }) => {
  await page.goto('https://todomvc.com/examples/react/#/');
  await page.waitForTimeout(500); // small wait for demo
  await page.fill('.new-todo','Demo task'); await page.press('.new-todo','Enter'); await expect(page.locator('.todo-list li')).toHaveText(['Demo task']);
});
