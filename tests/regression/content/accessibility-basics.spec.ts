import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '../../../src/fixtures/test-fixtures';
import { AUDITED_PAGES } from '../../../src/data/routes';
import { collectMissingInputLabels } from '../support/telemetry';

test.describe('Accessibility basics', () => {
  test.describe.parallel('semantic contracts', () => {
    for (const auditedPage of AUDITED_PAGES) {
      test(
        `should satisfy baseline accessibility checks on ${auditedPage.key} `
          + '@allure.label.epic:Regression '
          + '@allure.label.feature:Accessibility '
          + '@allure.label.story:BaselineA11y '
          + '@allure.label.severity:normal '
          + '@regression @content',
        async ({ page }) => {
          await page.goto(auditedPage.route, { waitUntil: 'networkidle' });

          await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
          await expect(page.getByRole('banner')).toBeVisible();
          await expect(page.locator('main')).toBeVisible();
          await expect(page.getByRole('contentinfo')).toBeVisible();
          await expect(page.locator('nav').first()).toBeVisible();

          const missingImageAltCount = await page.locator('img:not([alt])').count();
          expect(missingImageAltCount).toBe(0);

          const missingLabels = await collectMissingInputLabels(page);
          expect(missingLabels, `Missing input labels on ${auditedPage.route}: ${missingLabels.join(', ')}`).toEqual([]);

          const axeResult = await new AxeBuilder({ page })
            .withRules(['image-alt', 'label', 'region', 'page-has-heading-one'])
            .analyze();

          expect(
            axeResult.violations,
            `Axe violations on ${auditedPage.route}: ${axeResult.violations
              .map((violation) => `${violation.id} (${violation.impact})`)
              .join(', ')}`,
          ).toEqual([]);
        },
      );
    }
  });
});
