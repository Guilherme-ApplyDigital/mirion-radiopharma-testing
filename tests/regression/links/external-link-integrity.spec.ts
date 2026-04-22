import { test, expect } from '../../../src/fixtures/test-fixtures';
import { EXTERNAL_LINK_EXPECTATIONS } from '../../../src/data/routes';

test.describe('External link integrity', () => {
  test(
    'should expose external links with secure new-tab attributes '
      + '@allure.label.epic:Regression '
      + '@allure.label.feature:Links '
      + '@allure.label.story:ExternalLinkAttributes '
      + '@allure.label.severity:normal '
      + '@regression @navigation',
    async ({ page }) => {
      await page.goto('/', { waitUntil: 'networkidle' });

      for (const externalLink of EXTERNAL_LINK_EXPECTATIONS) {
        const locator = page.locator(`a[href^="${externalLink.url}"]`).first();
        if ((await locator.count()) === 0) {
          continue;
        }

        await expect(locator).toHaveAttribute('target', '_blank');
        await expect(locator).toHaveAttribute('rel', /noopener/);
      }
    },
  );

  test(
    'should resolve documented external links or mark bot-blocked statuses '
      + '@allure.label.epic:Regression '
      + '@allure.label.feature:Links '
      + '@allure.label.story:ExternalResolution '
      + '@allure.label.severity:critical '
      + '@regression @critical',
    async ({ request }) => {
      for (const expectation of EXTERNAL_LINK_EXPECTATIONS) {
        const response = await request.get(expectation.url, { maxRedirects: 5 });

        expect(
          expectation.allowedStatuses,
          `Unexpected status for ${expectation.url}: ${response.status()}`,
        ).toContain(response.status());
      }
    },
  );
});
