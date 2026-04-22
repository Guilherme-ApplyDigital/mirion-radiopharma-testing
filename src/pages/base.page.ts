import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;
  readonly appRoot: Locator;

  constructor(page: Page) {
    this.page = page;
    this.appRoot = page.locator('body');
  }

  async goto(path = ''): Promise<void> {
    await this.page.goto(path);
  }

  async expectPageLoaded(): Promise<void> {
    await expect(this.appRoot).toBeVisible();
  }

  async captureScreenshot(path: string): Promise<string> {
    await this.page.screenshot({ path, fullPage: true });
    return path;
  }
}
