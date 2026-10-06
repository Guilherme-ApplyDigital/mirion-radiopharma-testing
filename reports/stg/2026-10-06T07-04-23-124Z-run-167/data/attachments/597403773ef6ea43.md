# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/links/external-link-integrity.spec.ts >> External link integrity >> should expose external links with secure new-tab attributes @allure.label.epic:Regression @allure.label.feature:Links @allure.label.story:ExternalLinkAttributes @allure.label.severity:normal @regression @navigation
- Location: tests/regression/links/external-link-integrity.spec.ts:5:7

# Error details

```
Error: page.goto: net::ERR_CERT_DATE_INVALID at https://stg.radiopharma.miriontest.net/
Call log:
  - navigating to "https://stg.radiopharma.miriontest.net/", waiting until "networkidle"

```

# Test source

```ts
  1  | import { test, expect } from '../../../src/fixtures/test-fixtures';
  2  | import { EXTERNAL_LINK_EXPECTATIONS } from '../../../src/data/routes';
  3  | 
  4  | test.describe('External link integrity', () => {
  5  |   test(
  6  |     'should expose external links with secure new-tab attributes '
  7  |       + '@allure.label.epic:Regression '
  8  |       + '@allure.label.feature:Links '
  9  |       + '@allure.label.story:ExternalLinkAttributes '
  10 |       + '@allure.label.severity:normal '
  11 |       + '@regression @navigation',
  12 |     async ({ page }) => {
> 13 |       await page.goto('/', { waitUntil: 'networkidle' });
     |                  ^ Error: page.goto: net::ERR_CERT_DATE_INVALID at https://stg.radiopharma.miriontest.net/
  14 | 
  15 |       for (const externalLink of EXTERNAL_LINK_EXPECTATIONS) {
  16 |         const locator = page.locator(`a[href^="${externalLink.url}"]`).first();
  17 |         if ((await locator.count()) === 0) {
  18 |           continue;
  19 |         }
  20 | 
  21 |         await expect(locator).toHaveAttribute('target', '_blank');
  22 |         await expect(locator).toHaveAttribute('rel', /noopener/);
  23 |       }
  24 |     },
  25 |   );
  26 | 
  27 |   test(
  28 |     'should resolve documented external links or mark bot-blocked statuses '
  29 |       + '@allure.label.epic:Regression '
  30 |       + '@allure.label.feature:Links '
  31 |       + '@allure.label.story:ExternalResolution '
  32 |       + '@allure.label.severity:critical '
  33 |       + '@regression @critical',
  34 |     async ({ request }) => {
  35 |       for (const expectation of EXTERNAL_LINK_EXPECTATIONS) {
  36 |         const response = await request.get(expectation.url, { maxRedirects: 5 });
  37 | 
  38 |         expect(
  39 |           expectation.allowedStatuses,
  40 |           `Unexpected status for ${expectation.url}: ${response.status()}`,
  41 |         ).toContain(response.status());
  42 |       }
  43 |     },
  44 |   );
  45 | });
  46 | 
```