import { test, expect } from '../../../src/fixtures/test-fixtures';
import { AUDITED_PAGES, FOOTER_INTERNAL_LINKS } from '../../../src/data/routes';
import { SiteLayoutPage } from '../../../src/pages/site-layout.page';

test.describe('Footer navigation', () => {
  for (const sourcePage of AUDITED_PAGES) {
    test(
      `should navigate through footer links from ${sourcePage.key} `
        + '@allure.label.epic:Regression '
        + '@allure.label.feature:Navigation '
        + '@allure.label.story:FooterLinks '
        + '@allure.label.severity:normal '
        + '@regression @navigation',
      async ({ page }) => {
        const layout = new SiteLayoutPage(page);
        await page.goto(sourcePage.route, { waitUntil: 'networkidle' });

        for (const link of FOOTER_INTERNAL_LINKS) {
          await page.goto(sourcePage.route, { waitUntil: 'networkidle' });
          await layout.clickFooterLink(link.label);
          await expect(page).toHaveURL(new RegExp(`${link.route.replace('/', '\\/')}(?:#.*)?$`));
        }
      },
    );
  }
});
