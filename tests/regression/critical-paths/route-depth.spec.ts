import { test, expect } from '../../../src/fixtures/test-fixtures';
import { DISCOVERED_INTERNAL_ROUTES } from '../../../src/data/routes';

const topLevelRouteSample = DISCOVERED_INTERNAL_ROUTES
  .filter((route) => !route.startsWith('/products/'))
  .slice(0, 20);

test.describe('Route depth coverage', () => {
  for (const route of topLevelRouteSample) {
    test(
      `route contract should hold for ${route} `
        + '@allure.label.epic:Regression '
        + '@allure.label.feature:CriticalPaths '
        + '@allure.label.story:RouteDepth '
        + '@allure.label.severity:normal '
        + '@regression @navigation',
      async ({ page, request, baseURL }) => {
        if (!baseURL) {
          throw new Error('BASE_URL is required for regression tests.');
        }

        const response = await request.get(new URL(route, baseURL).toString());
        expect(response.status(), `Unexpected route status for ${route}`).toBeLessThan(400);
        expect(response.url(), `Route redirected to not-found page for ${route}`).not.toMatch(/\/404|not-found/i);

        await page.goto(route, { waitUntil: 'networkidle' });
        await expect(page).toHaveURL(new RegExp(`${route.replace('/', '\\/')}(?:#.*)?$`));
        await expect(page.locator('main')).toHaveCount(1);

        const semanticHeading = page.getByRole('heading', { level: 1 }).or(page.getByRole('heading', { level: 2 }));
        await expect(semanticHeading.first(), `Missing primary semantic heading on ${route}`).toBeVisible();
      },
    );
  }
});
