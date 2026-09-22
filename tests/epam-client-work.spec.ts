import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('navigates from Services to Client Work', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    const mainNavigation = page.getByRole('navigation', { name: 'Main navigation' }).filter({ visible: true });
    await mainNavigation.getByRole('link', { name: 'Services', exact: true }).click();
    await expect(page).toHaveURL(/\/services$/);
