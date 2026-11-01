# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/navigation/footer-navigation.spec.ts >> Footer navigation >> should navigate through footer links from drug-owners-developers @allure.label.epic:Regression @allure.label.feature:Navigation @allure.label.story:FooterLinks @allure.label.severity:normal @regression @navigation
- Location: tests/regression/navigation/footer-navigation.spec.ts:7:9

# Error details

```
Error: page.goto: net::ERR_CERT_DATE_INVALID at https://stg.radiopharma.miriontest.net/drug-owners-developers
Call log:
  - navigating to "https://stg.radiopharma.miriontest.net/drug-owners-developers", waiting until "networkidle"

```

# Test source

```ts
  1  | import { test, expect } from '../../../src/fixtures/test-fixtures';
  2  | import { AUDITED_PAGES, FOOTER_INTERNAL_LINKS } from '../../../src/data/routes';
  3  | import { SiteLayoutPage } from '../../../src/pages/site-layout.page';
  4  | 
  5  | test.describe('Footer navigation', () => {
  6  |   for (const sourcePage of AUDITED_PAGES) {
  7  |     test(
  8  |       `should navigate through footer links from ${sourcePage.key} `
  9  |         + '@allure.label.epic:Regression '
  10 |         + '@allure.label.feature:Navigation '
  11 |         + '@allure.label.story:FooterLinks '
  12 |         + '@allure.label.severity:normal '
  13 |         + '@regression @navigation',
  14 |       async ({ page }) => {
  15 |         const layout = new SiteLayoutPage(page);
> 16 |         await page.goto(sourcePage.route, { waitUntil: 'networkidle' });
     |                    ^ Error: page.goto: net::ERR_CERT_DATE_INVALID at https://stg.radiopharma.miriontest.net/drug-owners-developers
  17 | 
  18 |         for (const link of FOOTER_INTERNAL_LINKS) {
  19 |           await page.goto(sourcePage.route, { waitUntil: 'networkidle' });
  20 |           await layout.clickFooterLink(link.label);
  21 |           await expect(page).toHaveURL(new RegExp(`${link.route.replace('/', '\\/')}(?:#.*)?$`));
  22 |         }
  23 |       },
  24 |     );
  25 |   }
  26 | });
  27 | 
```