# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/content/accessibility-basics.spec.ts >> Accessibility basics >> semantic contracts >> should satisfy baseline accessibility checks on solutions @allure.label.epic:Regression @allure.label.feature:Accessibility @allure.label.story:BaselineA11y @allure.label.severity:normal @regression @content
- Location: tests/regression/content/accessibility-basics.spec.ts:9:11

# Error details

```
Error: page.goto: net::ERR_CERT_DATE_INVALID at https://stg.radiopharma.miriontest.net/solutions
Call log:
  - navigating to "https://stg.radiopharma.miriontest.net/solutions", waiting until "networkidle"

```

# Test source

```ts
  1  | import AxeBuilder from '@axe-core/playwright';
  2  | import { test, expect } from '../../../src/fixtures/test-fixtures';
  3  | import { AUDITED_PAGES } from '../../../src/data/routes';
  4  | import { collectMissingInputLabels } from '../support/telemetry';
  5  | 
  6  | test.describe('Accessibility basics', () => {
  7  |   test.describe.parallel('semantic contracts', () => {
  8  |     for (const auditedPage of AUDITED_PAGES) {
  9  |       test(
  10 |         `should satisfy baseline accessibility checks on ${auditedPage.key} `
  11 |           + '@allure.label.epic:Regression '
  12 |           + '@allure.label.feature:Accessibility '
  13 |           + '@allure.label.story:BaselineA11y '
  14 |           + '@allure.label.severity:normal '
  15 |           + '@regression @content',
  16 |         async ({ page }) => {
> 17 |           await page.goto(auditedPage.route, { waitUntil: 'networkidle' });
     |                      ^ Error: page.goto: net::ERR_CERT_DATE_INVALID at https://stg.radiopharma.miriontest.net/solutions
  18 | 
  19 |           await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  20 |           await expect(page.getByRole('banner')).toBeVisible();
  21 |           await expect(page.locator('main')).toBeVisible();
  22 |           await expect(page.getByRole('contentinfo')).toBeVisible();
  23 |           await expect(page.locator('nav').first()).toBeVisible();
  24 | 
  25 |           const missingImageAltCount = await page.locator('img:not([alt])').count();
  26 |           expect(missingImageAltCount).toBe(0);
  27 | 
  28 |           const missingLabels = await collectMissingInputLabels(page);
  29 |           expect(missingLabels, `Missing input labels on ${auditedPage.route}: ${missingLabels.join(', ')}`).toEqual([]);
  30 | 
  31 |           const axeResult = await new AxeBuilder({ page })
  32 |             .withRules(['image-alt', 'label', 'region', 'page-has-heading-one'])
  33 |             .analyze();
  34 | 
  35 |           expect(
  36 |             axeResult.violations,
  37 |             `Axe violations on ${auditedPage.route}: ${axeResult.violations
  38 |               .map((violation) => `${violation.id} (${violation.impact})`)
  39 |               .join(', ')}`,
  40 |           ).toEqual([]);
  41 |         },
  42 |       );
  43 |     }
  44 |   });
  45 | });
  46 | 
```