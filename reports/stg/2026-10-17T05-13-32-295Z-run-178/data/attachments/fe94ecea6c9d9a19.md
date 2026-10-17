# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/pages/about-us.page.spec.ts >> should load about us page with correct title and heading @allure.label.epic:Regression @allure.label.feature:Pages @allure.label.story:about-us @allure.label.severity:critical @smoke @regression @critical
- Location: tests/regression/pages/about-us.page.spec.ts:11:5

# Error details

```
Error: page.goto: net::ERR_CERT_DATE_INVALID at https://stg.radiopharma.miriontest.net/about-us
Call log:
  - navigating to "https://stg.radiopharma.miriontest.net/about-us", waiting until "networkidle"

```

# Test source

```ts
  1  | import { expect, Page, TestInfo } from '@playwright/test';
  2  | import { AuditedPage } from '../../../src/data/routes';
  3  | import { assertNoPageErrors, startTracker } from './telemetry';
  4  | 
  5  | export async function verifyAuditedPageContract(
  6  |   page: Page,
  7  |   baseURL: string,
  8  |   auditedPage: AuditedPage,
  9  |   testInfo: TestInfo,
  10 | ): Promise<void> {
  11 |   const tracker = startTracker(page, baseURL);
  12 | 
  13 |   try {
> 14 |     const response = await page.goto(auditedPage.route, { waitUntil: 'networkidle' });
     |                                 ^ Error: page.goto: net::ERR_CERT_DATE_INVALID at https://stg.radiopharma.miriontest.net/about-us
  15 |     expect(response, `No navigation response for ${auditedPage.route}`).not.toBeNull();
  16 |     expect(response?.status(), `Unexpected status for ${auditedPage.route}`).toBeLessThan(400);
  17 | 
  18 |     await expect(page).toHaveTitle(auditedPage.titlePattern);
  19 |     await expect(page.getByRole('heading', { level: 1, name: auditedPage.heading })).toBeVisible();
  20 | 
  21 |     const screenshotPath = testInfo.outputPath(`${auditedPage.key}.png`);
  22 |     await page.screenshot({ path: screenshotPath, fullPage: true });
  23 |     await testInfo.attach(`baseline-${auditedPage.key}`, { path: screenshotPath, contentType: 'image/png' });
  24 | 
  25 |     const filteredConsoleNoise = await assertNoPageErrors(tracker, baseURL);
  26 |     if (filteredConsoleNoise.length > 0) {
  27 |       await testInfo.attach('filtered-console-noise.txt', {
  28 |         body: Buffer.from(filteredConsoleNoise.join('\n')),
  29 |         contentType: 'text/plain',
  30 |       });
  31 |     }
  32 |   } finally {
  33 |     tracker.stop();
  34 |   }
  35 | }
  36 | 
```