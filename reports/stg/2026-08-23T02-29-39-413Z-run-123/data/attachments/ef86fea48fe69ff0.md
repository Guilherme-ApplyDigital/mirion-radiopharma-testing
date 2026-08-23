# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/seo-meta/metadata.spec.ts >> SEO metadata >> audited pages >> should expose canonical and social metadata on hospitals-clinical-sites @allure.label.epic:Regression @allure.label.feature:SeoMeta @allure.label.story:MetadataContract @allure.label.severity:normal @regression
- Location: tests/regression/seo-meta/metadata.spec.ts:7:11

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /Radiopharma Solutions for Clinical Sites \| Mirion Radiopharma/i
Received string:  "404: NOT_FOUND"
Timeout: 10000ms

Call log:
  - Expect "toHaveTitle" with timeout 10000ms
    14 × unexpected value "404: NOT_FOUND"

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
      - code [ref=e10]: "`sfo1::m5br7-1787452127189-4939d962935a`"
  - link "This deployment cannot be found. For more information and troubleshooting, see our documentation." [ref=e11] [cursor=pointer]:
    - /url: https://vercel.com/docs/errors/DEPLOYMENT_NOT_FOUND
    - generic [ref=e12]: This deployment cannot be found. For more information and troubleshooting, see our documentation.
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
  19 |           await page.goto(auditedPage.route, { waitUntil: 'networkidle' });
> 20 |           await expect(page).toHaveTitle(auditedPage.titlePattern);
     |                              ^ Error: expect(page).toHaveTitle(expected) failed
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