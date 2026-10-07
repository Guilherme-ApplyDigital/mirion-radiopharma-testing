# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/navigation/header-navigation.spec.ts >> Header navigation >> should navigate through header links from contact-us @allure.label.epic:Regression @allure.label.feature:Navigation @allure.label.story:HeaderLinks @allure.label.severity:critical @regression @navigation @critical
- Location: tests/regression/navigation/header-navigation.spec.ts:9:9

# Error details

```
Error: page.goto: net::ERR_CERT_DATE_INVALID at https://stg.radiopharma.miriontest.net/contact-us
Call log:
  - navigating to "https://stg.radiopharma.miriontest.net/contact-us", waiting until "networkidle"

```

# Test source

```ts
  1  | import { test, expect } from '../../../src/fixtures/test-fixtures';
  2  | import { AUDITED_PAGES, HEADER_LINKS } from '../../../src/data/routes';
  3  | import { SiteLayoutPage } from '../../../src/pages/site-layout.page';
  4  | 
  5  | test.describe('Header navigation', () => {
  6  |   test.skip(({ isMobile }) => isMobile, 'Desktop navigation checks use visible header links.');
  7  | 
  8  |   for (const sourcePage of AUDITED_PAGES) {
  9  |     test(
  10 |       `should navigate through header links from ${sourcePage.key} `
  11 |         + '@allure.label.epic:Regression '
  12 |         + '@allure.label.feature:Navigation '
  13 |         + '@allure.label.story:HeaderLinks '
  14 |         + '@allure.label.severity:critical '
  15 |         + '@regression @navigation @critical',
  16 |       async ({ page }) => {
  17 |         const layout = new SiteLayoutPage(page);
> 18 |         await page.goto(sourcePage.route, { waitUntil: 'networkidle' });
     |                    ^ Error: page.goto: net::ERR_CERT_DATE_INVALID at https://stg.radiopharma.miriontest.net/contact-us
  19 |         await layout.expectLayoutVisible();
  20 | 
  21 |         for (const link of HEADER_LINKS) {
  22 |           await page.goto(sourcePage.route, { waitUntil: 'networkidle' });
  23 |           await layout.clickHeaderLink(link.label);
  24 |           await expect(page).toHaveURL(new RegExp(`${link.route.replace('/', '\\/')}(?:#.*)?$`));
  25 |         }
  26 |       },
  27 |     );
  28 |   }
  29 | 
  30 |   test(
  31 |     'should return to home when clicking site logo '
  32 |       + '@allure.label.epic:Regression '
  33 |       + '@allure.label.feature:Navigation '
  34 |       + '@allure.label.story:LogoNavigation '
  35 |       + '@allure.label.severity:normal '
  36 |       + '@regression @navigation',
  37 |     async ({ page }) => {
  38 |       const layout = new SiteLayoutPage(page);
  39 |       await page.goto('/about-us', { waitUntil: 'networkidle' });
  40 |       await layout.clickLogo();
  41 |       await expect(page).toHaveURL(/\/$/);
  42 |     },
  43 |   );
  44 | });
  45 | 
```