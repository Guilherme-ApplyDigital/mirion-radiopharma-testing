import { test, expect } from '../../../src/fixtures/test-fixtures';
import { ContactPage } from '../../../src/pages/contact.page';

const expectedRequiredFields = ['message', 'firstname', 'lastname', 'email', 'phone', 'company', 'country'];

test.describe('Contact form live integration', () => {
  test(
    'should expose a stable required-field contract on the primary contact form '
      + '@allure.label.epic:Regression '
      + '@allure.label.feature:Forms '
      + '@allure.label.story:LiveRequiredContract '
      + '@allure.label.severity:critical '
      + '@regression @forms @critical',
    async ({ page }) => {
      const contactPage = new ContactPage(page);
      await contactPage.open();

      const requiredNames = await contactPage.mainForm
        .locator('input[required], textarea[required], select[required]')
        .evaluateAll((elements) =>
          elements
            .map((element) => element.getAttribute('name') ?? '')
            .filter(Boolean)
            .sort(),
        );

      expect(requiredNames).toEqual([...expectedRequiredFields].sort());
    },
  );

  test(
    'should keep identity fields isolated while users fill contact data '
      + '@allure.label.epic:Regression '
      + '@allure.label.feature:Forms '
      + '@allure.label.story:FieldIsolation '
      + '@allure.label.severity:normal '
      + '@regression @forms',
    async ({ page }) => {
      const contactPage = new ContactPage(page);
      await contactPage.open();

      await contactPage.firstNameInput.fill('Jane');
      await contactPage.lastNameInput.fill('Doe');
      await contactPage.emailInput.fill('jane.doe@example.com');

      await expect(contactPage.firstNameInput).toHaveValue('Jane');
      await expect(contactPage.lastNameInput).toHaveValue('Doe');
      await expect(contactPage.emailInput).toHaveValue('jane.doe@example.com');
    },
  );

  test(
    'should not emit invalid captcha key errors when attempting consultation submission '
      + '@allure.label.epic:Regression '
      + '@allure.label.feature:Forms '
      + '@allure.label.story:CaptchaHealth '
      + '@allure.label.severity:critical '
      + '@regression @forms @critical',
    async ({ page }) => {
      const contactPage = new ContactPage(page);
      const consoleErrors: string[] = [];

      page.on('console', (message) => {
        if (message.type() === 'error' || message.type() === 'warning') {
          consoleErrors.push(message.text());
        }
      });

      await contactPage.open();
      await contactPage.fillRequiredFields();
      await contactPage.submitButton.click();

      // Captcha and third-party integration errors can arrive asynchronously.
      await page.waitForTimeout(1500);

      const captchaErrors = consoleErrors.filter((entry) =>
        /invalid site key|recaptcha|captcha/i.test(entry),
      );

      expect(captchaErrors, 'Found captcha/reCAPTCHA integration errors on live contact submission.').toEqual([]);
    },
  );
});
