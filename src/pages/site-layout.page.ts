import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class SiteLayoutPage extends BasePage {
  readonly header: Locator;
  readonly footer: Locator;
  readonly logoLink: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.getByRole('banner');
    this.footer = page.locator('footer').first();
    this.logoLink = page.locator('a[href="/"]').first();
  }

  async expectLayoutVisible(): Promise<void> {
    await expect(this.header).toBeVisible();
    await expect(this.footer).toBeVisible();
  }

  async clickHeaderLink(label: string): Promise<void> {
    await this.clickHeaderNav(label);
  }

  async clickHeaderNav(label: string, targetRoute?: string): Promise<void> {
    const directLink = this.header.getByRole('link', { name: label, exact: false }).first();
    if (await directLink.count()) {
      await directLink.click();
      return;
    }

    const trigger = this.header.getByRole('button', { name: label, exact: false }).first();
    if (!(await trigger.count())) {
      throw new Error(`Header item "${label}" was not found as a link or button.`);
    }

    await trigger.click();

    const fallbackRoute = targetRoute ?? `/${label.toLowerCase().replace(/\s+/g, '-')}`;
    const submenuTarget = this.page.locator(`a[href="${fallbackRoute}"], a[href^="${fallbackRoute}#"]`).first();
    if (await submenuTarget.count()) {
      await submenuTarget.click();
      return;
    }

    throw new Error(
      `Header button "${label}" opened, but no submenu target matched route "${fallbackRoute}".`,
    );
  }

  async clickFooterLink(label: string): Promise<void> {
    await this.footer.getByRole('link', { name: label, exact: false }).first().click();
  }

  async clickLogo(): Promise<void> {
    await this.logoLink.click();
  }
}
