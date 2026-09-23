# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/links/internal-link-integrity.spec.ts >> Internal link integrity >> should resolve every discovered internal route without 4xx/5xx @allure.label.epic:Regression @allure.label.feature:Links @allure.label.story:InternalRoutes @allure.label.severity:critical @regression @critical
- Location: tests/regression/links/internal-link-integrity.spec.ts:5:7

# Error details

```
Error: Route failed: /

expect(received).toBeLessThan(expected)

Expected: < 400
Received:   404
```

# Test source

```ts
  1  | import { test, expect } from '../../../src/fixtures/test-fixtures';
  2  | import { DISCOVERED_INTERNAL_ROUTES, KNOWN_ANCHOR_LINKS } from '../../../src/data/routes';
  3  | 
  4  | test.describe('Internal link integrity', () => {
  5  |   test(
  6  |     'should resolve every discovered internal route without 4xx/5xx '
  7  |       + '@allure.label.epic:Regression '
  8  |       + '@allure.label.feature:Links '
  9  |       + '@allure.label.story:InternalRoutes '
  10 |       + '@allure.label.severity:critical '
  11 |       + '@regression @critical',
  12 |     async ({ request, baseURL }) => {
  13 |       if (!baseURL) {
  14 |         throw new Error('BASE_URL is required for regression tests.');
  15 |       }
  16 | 
  17 |       for (const route of DISCOVERED_INTERNAL_ROUTES) {
  18 |         const response = await request.get(new URL(route, baseURL).toString());
> 19 |         expect(response.status(), `Route failed: ${route}`).toBeLessThan(400);
     |                                                             ^ Error: Route failed: /
  20 |         expect(response.url(), `Route redirected to a not-found URL: ${route}`).not.toMatch(/\/404|not-found/i);
  21 |       }
  22 |     },
  23 |   );
  24 | 
  25 |   test(
  26 |     'should resolve known anchor links without broken targets '
  27 |       + '@allure.label.epic:Regression '
  28 |       + '@allure.label.feature:Links '
  29 |       + '@allure.label.story:AnchorIntegrity '
  30 |       + '@allure.label.severity:normal '
  31 |       + '@regression',
  32 |     async ({ page }) => {
  33 |       for (const anchoredRoute of KNOWN_ANCHOR_LINKS) {
  34 |         const [route, hash] = anchoredRoute.split('#');
  35 |         await page.goto(anchoredRoute, { waitUntil: 'networkidle' });
  36 | 
  37 |         if (!hash) {
  38 |           continue;
  39 |         }
  40 | 
  41 |         // IDs can start with digits, so raw "#id" can be invalid CSS; use attribute selector instead.
  42 |         const target = page.locator(`[id="${hash}"]`);
  43 |         await expect(target, `Anchor target missing for ${route}#${hash}`).toHaveCount(1);
  44 |       }
  45 |     },
  46 |   );
  47 | });
  48 | 
```