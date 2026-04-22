import { test, expect } from '../../../src/fixtures/test-fixtures';
import { AUDITED_PAGES, HEADER_LINKS } from '../../../src/data/routes';
import { SiteLayoutPage } from '../../../src/pages/site-layout.page';

test.describe('Header navigation', () => {
  test.skip(({ isMobile }) => isMobile, 'Desktop navigation checks use visible header links.');

  for (const sourcePage of AUDITED_PAGES) {
    test(
      `should navigate through header links from ${sourcePage.key} `
        + '@allure.label.epic:Regression '
        + '@allure.label.feature:Navigation '
        + '@allure.label.story:HeaderLinks '
        + '@allure.label.severity:critical '
        + '@regression @navigation @critical',
      async ({ page }) => {
        const layout = new SiteLayoutPage(page);
        await page.goto(sourcePage.route, { waitUntil: 'networkidle' });
        await layout.expectLayoutVisible();

        for (const link of HEADER_LINKS) {
          await page.goto(sourcePage.route, { waitUntil: 'networkidle' });
          await layout.clickHeaderLink(link.label);
          await expect(page).toHaveURL(new RegExp(`${link.route.replace('/', '\\/')}(?:#.*)?$`));
        }
      },
    );
  }

  test(
    'should return to home when clicking site logo '
      + '@allure.label.epic:Regression '
      + '@allure.label.feature:Navigation '
      + '@allure.label.story:LogoNavigation '
      + '@allure.label.severity:normal '
      + '@regression @navigation',
    async ({ page }) => {
      const layout = new SiteLayoutPage(page);
      await page.goto('/about-us', { waitUntil: 'networkidle' });
      await layout.clickLogo();
      await expect(page).toHaveURL(/\/$/);
    },
  );
});
