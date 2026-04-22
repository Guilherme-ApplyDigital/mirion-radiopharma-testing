import { test, expect } from '../../src/fixtures/test-fixtures';

test.describe('Login journey @allure.label.epic:Authentication @allure.label.feature:Login', () => {
  test(
    'login form is interactive @allure.label.story:CredentialEntry @allure.label.severity:normal @allure.label.tag:e2e',
    async ({ loginPage, credentials }) => {
      test.skip(!credentials.username || !credentials.password, 'Set APP_USERNAME and APP_PASSWORD for login checks.');

      await loginPage.open();
      await loginPage.login(credentials.username, credentials.password);

      await expect(loginPage.appRoot).toBeVisible();
    },
  );
});
