import { test, expect } from '../../src/fixtures/test-fixtures';

test.describe('Smoke checks @allure.label.epic:Platform @allure.label.feature:Smoke', () => {
  test(
    'staging root is reachable @allure.label.story:RootReachability @allure.label.severity:critical @allure.label.tag:smoke',
    async ({ page, healthClient }) => {
      const status = await healthClient.getHomeStatus();
      expect(status).toBeLessThan(500);

      await page.goto('/');
      await expect(page.locator('body')).toBeVisible();
      await expect(page).toHaveURL(/miriontest\.net/);
    },
  );
});
