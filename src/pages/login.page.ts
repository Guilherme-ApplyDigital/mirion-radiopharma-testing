import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByLabel(/email|username|user id/i).first();
    this.passwordInput = page.getByLabel(/password/i).first();
    this.signInButton = page.getByRole('button', { name: /sign in|log in|login/i }).first();
  }

  async open(): Promise<void> {
    await this.goto('/');
    await this.expectPageLoaded();
  }

  async login(username: string, password: string): Promise<void> {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}
