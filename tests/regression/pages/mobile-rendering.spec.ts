import { test, expect } from '../../../src/fixtures/test-fixtures';
import { AUDITED_PAGES } from '../../../src/data/routes';

test.describe('Mobile rendering checks', () => {
  test.skip(({ isMobile }) => !isMobile, 'Mobile-only regression coverage.');

  test.describe.parallel('mobile layout contracts', () => {
    for (const auditedPage of AUDITED_PAGES.slice(0, 4)) {
      test(
        `should render ${auditedPage.key} page without horizontal overflow `
          + '@allure.label.epic:Regression '
          + '@allure.label.feature:Responsive '
          + '@allure.label.story:MobileLayout '
          + '@allure.label.severity:normal '
          + '@regression',
        async ({ page }) => {
          await page.goto(auditedPage.route, { waitUntil: 'networkidle' });
          await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

          const hasOverflow = await page.evaluate(
            () => document.documentElement.scrollWidth > window.innerWidth + 1,
          );

          expect(hasOverflow, `${auditedPage.route} has horizontal overflow on mobile`).toBeFalsy();
        },
      );
    }
  });
});
