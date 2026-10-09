# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/content/image-integrity.spec.ts >> Image content integrity >> audited pages >> should load every image on hospitals-clinical-sites after scroll @allure.label.epic:Regression @allure.label.feature:Content @allure.label.story:ImageLoad @allure.label.severity:critical @regression @content @critical
- Location: tests/regression/content/image-integrity.spec.ts:8:11

# Error details

```
Error: page.goto: net::ERR_CERT_DATE_INVALID at https://stg.radiopharma.miriontest.net/hospitals-clinical-sites
Call log:
  - navigating to "https://stg.radiopharma.miriontest.net/hospitals-clinical-sites", waiting until "networkidle"

```

# Test source

```ts
  1  | import { test, expect } from '../../../src/fixtures/test-fixtures';
  2  | import { AUDITED_PAGES } from '../../../src/data/routes';
  3  | import { collectImageFailures } from '../support/telemetry';
  4  | 
  5  | test.describe('Image content integrity', () => {
  6  |   test.describe.parallel('audited pages', () => {
  7  |     for (const auditedPage of AUDITED_PAGES) {
  8  |       test(
  9  |         `should load every image on ${auditedPage.key} after scroll `
  10 |           + '@allure.label.epic:Regression '
  11 |           + '@allure.label.feature:Content '
  12 |           + '@allure.label.story:ImageLoad '
  13 |           + '@allure.label.severity:critical '
  14 |           + '@regression @content @critical',
  15 |         async ({ page }) => {
> 16 |           await page.goto(auditedPage.route, { waitUntil: 'networkidle' });
     |                      ^ Error: page.goto: net::ERR_CERT_DATE_INVALID at https://stg.radiopharma.miriontest.net/hospitals-clinical-sites
  17 |           const failures = await collectImageFailures(page);
  18 |           expect(failures, `Broken images found on ${auditedPage.route}:\n${failures.join('\n')}`).toEqual([]);
  19 |         },
  20 |       );
  21 |     }
  22 |   });
  23 | });
  24 | 
```