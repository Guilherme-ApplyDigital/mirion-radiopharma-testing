# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/critical-paths/route-depth.spec.ts >> Route depth coverage >> route contract should hold for /drug-owners-developers @allure.label.epic:Regression @allure.label.feature:CriticalPaths @allure.label.story:RouteDepth @allure.label.severity:normal @regression @navigation
- Location: tests/regression/critical-paths/route-depth.spec.ts:10:9

# Error details

```
Error: Unexpected route status for /drug-owners-developers

expect(received).toBeLessThan(expected)

Expected: < 400
Received:   404
```

# Test source

```ts
  1  | import { test, expect } from '../../../src/fixtures/test-fixtures';
  2  | import { DISCOVERED_INTERNAL_ROUTES } from '../../../src/data/routes';
  3  | 
  4  | const topLevelRouteSample = DISCOVERED_INTERNAL_ROUTES
  5  |   .filter((route) => !route.startsWith('/products/'))
  6  |   .slice(0, 20);
  7  | 
  8  | test.describe('Route depth coverage', () => {
  9  |   for (const route of topLevelRouteSample) {
  10 |     test(
  11 |       `route contract should hold for ${route} `
  12 |         + '@allure.label.epic:Regression '
  13 |         + '@allure.label.feature:CriticalPaths '
  14 |         + '@allure.label.story:RouteDepth '
  15 |         + '@allure.label.severity:normal '
  16 |         + '@regression @navigation',
  17 |       async ({ page, request, baseURL }) => {
  18 |         if (!baseURL) {
  19 |           throw new Error('BASE_URL is required for regression tests.');
  20 |         }
  21 | 
  22 |         const response = await request.get(new URL(route, baseURL).toString());
> 23 |         expect(response.status(), `Unexpected route status for ${route}`).toBeLessThan(400);
     |                                                                           ^ Error: Unexpected route status for /drug-owners-developers
  24 |         expect(response.url(), `Route redirected to not-found page for ${route}`).not.toMatch(/\/404|not-found/i);
  25 | 
  26 |         await page.goto(route, { waitUntil: 'networkidle' });
  27 |         await expect(page).toHaveURL(new RegExp(`${route.replace('/', '\\/')}(?:#.*)?$`));
  28 |         await expect(page.locator('main')).toHaveCount(1);
  29 | 
  30 |         const semanticHeading = page.getByRole('heading', { level: 1 }).or(page.getByRole('heading', { level: 2 }));
  31 |         await expect(semanticHeading.first(), `Missing primary semantic heading on ${route}`).toBeVisible();
  32 |       },
  33 |     );
  34 |   }
  35 | });
  36 | 
```