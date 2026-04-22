import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ContactPage extends BasePage {
  readonly mainForm: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly companyInput: Locator;
  readonly messageInput: Locator;
  readonly countrySelect: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.mainForm = page.locator('form').filter({ has: page.locator('#firstname') }).first();
    this.firstNameInput = page.locator('#firstname');
    this.lastNameInput = page.locator('#lastname');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('#phone');
    this.companyInput = page.locator('#company');
    this.messageInput = page.locator('#message');
    this.countrySelect = page.locator('#country');
    const submitById = this.mainForm.locator('#contactSubmit');
    const submitByRole = this.mainForm.getByRole('button', {
      name: /request consultation|submit|send/i,
    });
    this.submitButton = submitById.or(submitByRole).first();
  }

  async open(): Promise<void> {
    await this.goto('/contact-us');
    await expect(this.mainForm).toBeVisible();
  }

  async fillRequiredFields(): Promise<void> {
    await this.firstNameInput.fill('QA');
    await this.lastNameInput.fill('Automation');
    await this.emailInput.fill('qa.automation@example.com');
    await this.phoneInput.fill('5551234567');
    await this.companyInput.fill('Mirion QA');
    await this.messageInput.fill('Regression test payload. Do not process.');
    await this.countrySelect.selectOption({ index: 1 });
  }
}
