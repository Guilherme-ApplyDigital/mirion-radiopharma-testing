# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/links/internal-link-integrity.spec.ts >> Internal link integrity >> should resolve known anchor links without broken targets @allure.label.epic:Regression @allure.label.feature:Links @allure.label.story:AnchorIntegrity @allure.label.severity:normal @regression
- Location: tests/regression/links/internal-link-integrity.spec.ts:25:7

# Error details

```
Error: Anchor target missing for /hospitals-clinical-sites#12e79609-2e70-4e51-ae7b-ab759f23d387

expect(locator).toHaveCount(expected) failed

Locator:  locator('[id="12e79609-2e70-4e51-ae7b-ab759f23d387"]')
Expected: 1
Received: 0
Timeout:  10000ms

Call log:
  - Anchor target missing for /hospitals-clinical-sites#12e79609-2e70-4e51-ae7b-ab759f23d387 with timeout 10000ms
  - waiting for locator('[id="12e79609-2e70-4e51-ae7b-ab759f23d387"]')
    14 × locator resolved to 0 elements
       - unexpected value "0"

```

# Page snapshot

```yaml
- main [ref=e3]:
  - paragraph [ref=e4]:
    - generic [ref=e5]:
      - strong [ref=e6]: "404"
      - text: ": NOT_FOUND"
    - generic [ref=e7]:
      - text: "Code:"
      - code [ref=e8]: "`DEPLOYMENT_NOT_FOUND`"
    - generic [ref=e9]:
      - text: "ID:"
      - code [ref=e10]: "`cle1::m2qx4-1785297775849-af99ec628dd3`"
  - link "This deployment cannot be found. For more information and troubleshooting, see our documentation." [ref=e11] [cursor=pointer]:
    - /url: https://vercel.com/docs/errors/DEPLOYMENT_NOT_FOUND
    - generic [ref=e12]: This deployment cannot be found. For more information and troubleshooting, see our documentation.
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
  19 |         expect(response.status(), `Route failed: ${route}`).toBeLessThan(400);
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
> 43 |         await expect(target, `Anchor target missing for ${route}#${hash}`).toHaveCount(1);
     |                                                                            ^ Error: Anchor target missing for /hospitals-clinical-sites#12e79609-2e70-4e51-ae7b-ab759f23d387
  44 |       }
  45 |     },
  46 |   );
  47 | });
  48 | 
```