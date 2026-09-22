import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('opens Client Work from the Services menu', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    const servicesLink = page.getByRole('link', { name: 'Services', exact: true });
    await expect(servicesLink).toBeVisible();
    await servicesLink.click({ force: true });
    await expect(page).toHaveURL(/\/services$/);

    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
    await expect(page).toHaveURL(/\/services\/client-work$/);
    await expect(page.getByRole('heading', { name: 'Client Work', exact: true })).toBeVisible();
  });
});
