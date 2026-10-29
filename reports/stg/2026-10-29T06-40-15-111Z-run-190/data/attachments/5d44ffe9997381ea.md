# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/forms/contact-form.spec.ts >> Contact form >> should submit contact form through mocked endpoint @allure.label.epic:Regression @allure.label.feature:Forms @allure.label.story:SafeSubmission @allure.label.severity:critical @regression @forms @critical
- Location: tests/regression/forms/contact-form.spec.ts:44:7

# Error details

```
Error: page.goto: net::ERR_CERT_DATE_INVALID at https://stg.radiopharma.miriontest.net/contact-us
Call log:
  - navigating to "https://stg.radiopharma.miriontest.net/contact-us", waiting until "load"

```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | 
  3  | export class BasePage {
  4  |   protected readonly page: Page;
  5  |   readonly appRoot: Locator;
  6  | 
  7  |   constructor(page: Page) {
  8  |     this.page = page;
  9  |     this.appRoot = page.locator('body');
  10 |   }
  11 | 
  12 |   async goto(path = ''): Promise<void> {
> 13 |     await this.page.goto(path);
     |                     ^ Error: page.goto: net::ERR_CERT_DATE_INVALID at https://stg.radiopharma.miriontest.net/contact-us
  14 |   }
  15 | 
  16 |   async expectPageLoaded(): Promise<void> {
  17 |     await expect(this.appRoot).toBeVisible();
  18 |   }
  19 | 
  20 |   async captureScreenshot(path: string): Promise<string> {
  21 |     await this.page.screenshot({ path, fullPage: true });
  22 |     return path;
  23 |   }
  24 | }
  25 | 
```