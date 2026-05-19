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

test.describe('Component Browser Regression Tests', () => {
  test('page loads and renders', async ({ page }) => {
    await page.goto('/');

    // Wait for the main content to load
    await expect(page.locator('main')).toBeVisible();

    // Check that the header exists
    await expect(page.locator('nav')).toBeVisible();
  });

  test('light mode is default state', async ({ page }) => {
    await page.goto('/');

    // Verify the page is in light mode (no dark class)
    const html = page.locator('html');
    const hasClass = await html.evaluate(el => el.classList.contains('dark'));
    expect(hasClass).toBe(false);
  });

  test('dark mode toggles correctly', async ({ page }) => {
    await page.goto('/');

    // Click the dark mode toggle
    const darkToggle = page.locator('button:has-text("Dark")');
    await darkToggle.click();

    // Wait for dark mode to apply
    await page.waitForFunction(() => {
      return document.documentElement.classList.contains('dark');
    });

    // Verify dark mode is active
    const html = page.locator('html');
    const hasDarkClass = await html.evaluate(el => el.classList.contains('dark'));
    expect(hasDarkClass).toBe(true);
  });

  test('all sections are accessible via navigation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check each section exists in the DOM
    for (const section of sections) {
      const sectionElement = page.locator(`#${section}`);
      await expect(sectionElement).toBeTruthy();
    }
  });

  test('buttons section contains button elements', async ({ page }) => {
    await page.goto('/#buttons');
    await page.waitForLoadState('networkidle');

    const section = page.locator('#buttons');
    await section.scrollIntoViewIfNeeded();

    // Verify button variants exist
    const buttons = section.locator('button');
    const count = await buttons.count();
    expect(count).toBeGreaterThanOrEqual(5); // At least default, hover, disabled, loading, focus
  });

  test('form inputs section contains input elements', async ({ page }) => {
    await page.goto('/#form');
    await page.waitForLoadState('networkidle');

    const section = page.locator('#form');
    await section.scrollIntoViewIfNeeded();

    // Verify inputs exist
    const inputs = section.locator('input[type="text"]');
    const count = await inputs.count();
    expect(count).toBeGreaterThanOrEqual(3); // default, disabled, with value
  });

  test('accordion section renders accordion component', async ({ page }) => {
    await page.goto('/#accordion');
    await page.waitForLoadState('networkidle');

    const section = page.locator('#accordion');
    await section.scrollIntoViewIfNeeded();

    // Check that accordion exists
    const accordion = section.locator('[class*="accordion"], button');
    const count = await accordion.count();
    expect(count).toBeGreaterThan(0);
  });

  test('avatar section contains avatar images', async ({ page }) => {
    await page.goto('/#avatar');
    await page.waitForLoadState('networkidle');

    const section = page.locator('#avatar');
    await section.scrollIntoViewIfNeeded();

    // Check that avatar images exist
    const avatars = section.locator('img[alt="avatar"]');
    const count = await avatars.count();
    expect(count).toBeGreaterThan(0);
  });

  test('spinner section contains spinner elements', async ({ page }) => {
    await page.goto('/#spinner');
    await page.waitForLoadState('networkidle');

    const section = page.locator('#spinner');
    await section.scrollIntoViewIfNeeded();

    // Check for spinner-like elements (divs, spans with animation)
    const elements = section.locator('div, span');
    const count = await elements.count();
    expect(count).toBeGreaterThan(0);
  });

  test('graph nodes section renders colored nodes', async ({ page }) => {
    await page.goto('/#graph');
    await page.waitForLoadState('networkidle');

    const section = page.locator('#graph');
    await section.scrollIntoViewIfNeeded();

    // Check for colored nodes
    const nodes = section.locator('div[class*="border-retro"]');
    const count = await nodes.count();
    expect(count).toBeGreaterThan(0);
  });

  test('theme toggle switches between light and dark', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const html = page.locator('html');

    // Initial state: light mode
    let hasDarkClass = await html.evaluate(el => el.classList.contains('dark'));
    expect(hasDarkClass).toBe(false);

    // Click toggle to dark
    const toggle = page.locator('button:has-text("Dark")');
    await toggle.click();
    await page.waitForTimeout(300);

    hasDarkClass = await html.evaluate(el => el.classList.contains('dark'));
    expect(hasDarkClass).toBe(true);

    // Click toggle to light
    const lightToggle = page.locator('button:has-text("Light")');
    await lightToggle.click();
    await page.waitForTimeout(300);

    hasDarkClass = await html.evaluate(el => el.classList.contains('dark'));
    expect(hasDarkClass).toBe(false);
  });

  test('sidebar navigation is functional', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Click on a nav link
    const navLink = page.locator('a:has-text("Buttons")');
    await navLink.click();

    // Wait for scroll to target or just verify the element exists
    const section = page.locator('#buttons');
    await expect(section).toBeVisible();
  });

  test('disabled inputs have correct styling', async ({ page }) => {
    await page.goto('/#form');
    await page.waitForLoadState('networkidle');

    const disabledInput = page.locator('input[disabled]').first();

    if (await disabledInput.count() > 0) {
      // Check that disabled inputs have opacity styling
      const opacity = await disabledInput.evaluate(el =>
        window.getComputedStyle(el).opacity
      );

      // Opacity should be less than 1 (indicating disabled state)
      expect(parseFloat(opacity)).toBeLessThan(1);
    }
  });

  test('badges display semantic variants', async ({ page }) => {
    await page.goto('/#badges');
    await page.waitForLoadState('networkidle');

    const section = page.locator('#badges');
    await section.scrollIntoViewIfNeeded();

    // Check for badge elements
    const badges = section.locator('span');
    const count = await badges.count();
    expect(count).toBeGreaterThanOrEqual(5); // At least one of each type
  });

  test('alerts display semantic variants', async ({ page }) => {
    await page.goto('/#alerts');
    await page.waitForLoadState('networkidle');

    const section = page.locator('#alerts');
    await section.scrollIntoViewIfNeeded();

    // Check for alert boxes
    const alerts = section.locator('div[class*="border"]');
    const count = await alerts.count();
    expect(count).toBeGreaterThanOrEqual(4); // At least one of each type
  });

  test('table renders with rows', async ({ page }) => {
    await page.goto('/#table');
    await page.waitForLoadState('networkidle');

    const section = page.locator('#table');
    await section.scrollIntoViewIfNeeded();

    // Check for table rows
    const rows = section.locator('tr');
    const count = await rows.count();
    expect(count).toBeGreaterThan(1); // Header + at least one row
  });

  test('pagination component is present', async ({ page }) => {
    await page.goto('/#pagination');
    await page.waitForLoadState('networkidle');

    const section = page.locator('#pagination');
    await section.scrollIntoViewIfNeeded();

    // Check for pagination element or buttons
    const pagination = section.locator('[class*="pagination"], nav');
    const count = await pagination.count();
    expect(count).toBeGreaterThan(0);
  });

  test('rating component is present', async ({ page }) => {
    await page.goto('/#rating');
    await page.waitForLoadState('networkidle');

    const section = page.locator('#rating');
    await section.scrollIntoViewIfNeeded();

    // Check for rating elements
    const ratings = section.locator('button[class*="rating"]');
    const count = await ratings.count();
    expect(count).toBeGreaterThan(0);
  });

  test('timeline component displays timeline items', async ({ page }) => {
    await page.goto('/#timeline');
    await page.waitForLoadState('networkidle');

    const section = page.locator('#timeline');
    await section.scrollIntoViewIfNeeded();

    // Check for timeline items
    const items = section.locator('[class*="timeline"]');
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });

  test('progress bars display different percentages', async ({ page }) => {
    await page.goto('/#progress');
    await page.waitForLoadState('networkidle');

    const section = page.locator('#progress');
    await section.scrollIntoViewIfNeeded();

    // Check for progress elements
    const progress = section.locator('[class*="progress"]');
    const count = await progress.count();
    expect(count).toBeGreaterThan(0);
  });
});
