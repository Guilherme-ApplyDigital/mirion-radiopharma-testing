# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/seo-meta/metadata.spec.ts >> SEO metadata >> audited pages >> should expose canonical and social metadata on hospitals-clinical-sites @allure.label.epic:Regression @allure.label.feature:SeoMeta @allure.label.story:MetadataContract @allure.label.severity:normal @regression
- Location: tests/regression/seo-meta/metadata.spec.ts:7:11

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
  3  | 
  4  | test.describe('SEO metadata', () => {
  5  |   test.describe.parallel('audited pages', () => {
  6  |     for (const auditedPage of AUDITED_PAGES) {
  7  |       test(
  8  |         `should expose canonical and social metadata on ${auditedPage.key} `
  9  |           + '@allure.label.epic:Regression '
  10 |           + '@allure.label.feature:SeoMeta '
  11 |           + '@allure.label.story:MetadataContract '
  12 |           + '@allure.label.severity:normal '
  13 |           + '@regression',
  14 |         async ({ page, baseURL }) => {
  15 |           if (!baseURL) {
  16 |             throw new Error('BASE_URL is required for regression tests.');
  17 |           }
  18 | 
> 19 |           await page.goto(auditedPage.route, { waitUntil: 'networkidle' });
     |                      ^ Error: page.goto: net::ERR_CERT_DATE_INVALID at https://stg.radiopharma.miriontest.net/hospitals-clinical-sites
  20 |           await expect(page).toHaveTitle(auditedPage.titlePattern);
  21 | 
  22 |           const metadata = await page.evaluate(() => {
  23 |             const byName = (name: string) =>
  24 |               document.querySelector(`meta[name="${name}"]`)?.getAttribute('content') ?? '';
  25 |             const byProperty = (property: string) =>
  26 |               document.querySelector(`meta[property="${property}"]`)?.getAttribute('content') ?? '';
  27 |             const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '';
  28 | 
  29 |             return {
  30 |               description: byName('description'),
  31 |               canonical,
  32 |               ogTitle: byProperty('og:title'),
  33 |               ogDescription: byProperty('og:description'),
  34 |               ogType: byProperty('og:type'),
  35 |             };
  36 |           });
  37 | 
  38 |           expect(metadata.description).not.toEqual('');
  39 |           expect(metadata.canonical).not.toEqual('');
  40 |           expect(metadata.canonical.startsWith(baseURL)).toBeTruthy();
  41 |           expect(metadata.ogTitle).not.toEqual('');
  42 |           expect(metadata.ogDescription).not.toEqual('');
  43 |           expect(metadata.ogType).not.toEqual('');
  44 |         },
  45 |       );
  46 |     }
  47 |   });
  48 | });
  49 | 
```