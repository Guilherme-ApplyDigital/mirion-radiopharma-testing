import { test, expect } from '../../../src/fixtures/test-fixtures';
import { AUDITED_PAGES } from '../../../src/data/routes';
import { collectImageFailures } from '../support/telemetry';

test.describe('Image content integrity', () => {
  test.describe.parallel('audited pages', () => {
    for (const auditedPage of AUDITED_PAGES) {
      test(
        `should load every image on ${auditedPage.key} after scroll `
          + '@allure.label.epic:Regression '
          + '@allure.label.feature:Content '
          + '@allure.label.story:ImageLoad '
          + '@allure.label.severity:critical '
          + '@regression @content @critical',
        async ({ page }) => {
          await page.goto(auditedPage.route, { waitUntil: 'networkidle' });
          const failures = await collectImageFailures(page);
          expect(failures, `Broken images found on ${auditedPage.route}:\n${failures.join('\n')}`).toEqual([]);
        },
      );
    }
  });
});
