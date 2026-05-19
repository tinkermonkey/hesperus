import { test, expect } from '@playwright/test';

const sections = [
  'buttons',
  'form',
  'selects',
  'checkboxes',
  'badges',
  'alerts',
  'cards',
  'table',
  'accordion',
  'avatar',
  'banner',
  'blockquote',
  'datepicker',
  'file-input',
  'footer',
  'hr',
  'kbd',
  'list',
  'pagination',
  'popover',
  'progress',
  'rating',
  'spinner',
  'timeline',
  'tooltip',
  'graph',
];

test.describe('Visual Regression Tests', () => {
  test('light mode baseline snapshots', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Ensure light mode is active
    const html = page.locator('html');
    await html.evaluate(el => el.classList.remove('dark'));

    for (const section of sections) {
      const sectionElement = page.locator(`#${section}`);
      await sectionElement.scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);

      await expect(sectionElement).toHaveScreenshot(`${section}-light.png`);
    }
  });

  test('dark mode baseline snapshots', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Enable dark mode
    const html = page.locator('html');
    await html.evaluate(el => el.classList.add('dark'));
    await page.waitForTimeout(300);

    for (const section of sections) {
      const sectionElement = page.locator(`#${section}`);
      await sectionElement.scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);

      await expect(sectionElement).toHaveScreenshot(`${section}-dark.png`);
    }
  });

  test('full page light mode snapshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const html = page.locator('html');
    await html.evaluate(el => el.classList.remove('dark'));

    await expect(page).toHaveScreenshot('full-page-light.png', { fullPage: true });
  });

  test('full page dark mode snapshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const html = page.locator('html');
    await html.evaluate(el => el.classList.add('dark'));
    await page.waitForTimeout(300);

    await expect(page).toHaveScreenshot('full-page-dark.png', { fullPage: true });
  });
});
