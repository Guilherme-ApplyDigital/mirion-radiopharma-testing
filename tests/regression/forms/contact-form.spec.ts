import { test, expect } from '../../../src/fixtures/test-fixtures';
import { ContactPage } from '../../../src/pages/contact.page';

test.describe('Contact form', () => {
  test(
    'should enforce required-field validation on contact form '
      + '@allure.label.epic:Regression '
      + '@allure.label.feature:Forms '
      + '@allure.label.story:RequiredValidation '
      + '@allure.label.severity:critical '
      + '@regression @forms @critical',
    async ({ page }) => {
      const contactPage = new ContactPage(page);
      await contactPage.open();

      await contactPage.submitButton.click();
      const invalidFieldCount = await contactPage.mainForm.locator(':invalid').count();
      expect(invalidFieldCount).toBeGreaterThan(0);
    },
  );

  test(
    'should reject invalid email format before submission '
      + '@allure.label.epic:Regression '
      + '@allure.label.feature:Forms '
      + '@allure.label.story:InvalidInputHandling '
      + '@allure.label.severity:normal '
      + '@regression @forms',
    async ({ page }) => {
      const contactPage = new ContactPage(page);
      await contactPage.open();

      await contactPage.emailInput.fill('invalid-email-format');
      await contactPage.submitButton.click();

      const emailValidation = await contactPage.emailInput.evaluate(
        (input) => (input as HTMLInputElement).validationMessage,
      );

      expect(emailValidation).not.toEqual('');
    },
  );

  test(
    'should submit contact form through mocked endpoint '
      + '@allure.label.epic:Regression '
      + '@allure.label.feature:Forms '
      + '@allure.label.story:SafeSubmission '
      + '@allure.label.severity:critical '
      + '@regression @forms @critical',
    async ({ page }) => {
      const contactPage = new ContactPage(page);
      const postRequests: string[] = [];

      await page.route('**/*', async (route) => {
        const request = route.request();
        const isContactSubmission =
          request.method() === 'POST' && /contact|hubspot|forms|submit/i.test(request.url());

        if (isContactSubmission) {
          postRequests.push(request.url());
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ ok: true }),
          });
          return;
        }

        await route.continue();
      });

      await contactPage.open();
      await contactPage.fillRequiredFields();
      await contactPage.submitButton.click();

      // POST telemetry and third-party form requests can resolve asynchronously after click.
      // Poll instead of asserting synchronously to avoid race-condition flakes.
      await expect
        .poll(
          () => postRequests.length,
          { timeout: 8000, message: 'Expected a mocked form submission request.' },
        )
        .toBeGreaterThan(0);
    },
  );
});
