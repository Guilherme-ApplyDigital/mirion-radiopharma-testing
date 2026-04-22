import { test, expect } from '../../../src/fixtures/test-fixtures';
import { DISCOVERED_INTERNAL_ROUTES, KNOWN_ANCHOR_LINKS } from '../../../src/data/routes';

test.describe('Internal link integrity', () => {
  test(
    'should resolve every discovered internal route without 4xx/5xx '
      + '@allure.label.epic:Regression '
      + '@allure.label.feature:Links '
      + '@allure.label.story:InternalRoutes '
      + '@allure.label.severity:critical '
      + '@regression @critical',
    async ({ request, baseURL }) => {
      if (!baseURL) {
        throw new Error('BASE_URL is required for regression tests.');
      }

      for (const route of DISCOVERED_INTERNAL_ROUTES) {
        const response = await request.get(new URL(route, baseURL).toString());
        expect(response.status(), `Route failed: ${route}`).toBeLessThan(400);
        expect(response.url(), `Route redirected to a not-found URL: ${route}`).not.toMatch(/\/404|not-found/i);
      }
    },
  );

  test(
    'should resolve known anchor links without broken targets '
      + '@allure.label.epic:Regression '
      + '@allure.label.feature:Links '
      + '@allure.label.story:AnchorIntegrity '
      + '@allure.label.severity:normal '
      + '@regression',
    async ({ page }) => {
      for (const anchoredRoute of KNOWN_ANCHOR_LINKS) {
        const [route, hash] = anchoredRoute.split('#');
        await page.goto(anchoredRoute, { waitUntil: 'networkidle' });

        if (!hash) {
          continue;
        }

        // IDs can start with digits, so raw "#id" can be invalid CSS; use attribute selector instead.
        const target = page.locator(`[id="${hash}"]`);
        await expect(target, `Anchor target missing for ${route}#${hash}`).toHaveCount(1);
      }
    },
  );
});
