import { test, expect } from '../../../src/fixtures/test-fixtures';
import { AUDITED_PAGES } from '../../../src/data/routes';
import { SiteLayoutPage } from '../../../src/pages/site-layout.page';

const personaPages = [
  'drug-owners-developers',
  'isotope-producers-radiopharmacies',
  'hospitals-clinical-sites',
] as const;

test.describe('Solutions critical funnel', () => {
  test(
    'home CTA should route users to solutions hub '
      + '@allure.label.epic:Regression '
      + '@allure.label.feature:CriticalPaths '
      + '@allure.label.story:HomeToSolutions '
      + '@allure.label.severity:critical '
      + '@regression @critical @navigation',
    async ({ page }) => {
      await page.goto('/', { waitUntil: 'networkidle' });

      const exploreSolutionsLink = page.locator('a[href="/solutions"]').first();
      await expect(exploreSolutionsLink).toBeVisible();
      await exploreSolutionsLink.click();

      await expect(page).toHaveURL(/\/solutions(?:#.*)?$/);
      await expect(page.getByRole('heading', { level: 1 })).toContainText(/Trusted Radiopharma Resources/i);
    },
  );

  for (const personaKey of personaPages) {
    const auditedPage = AUDITED_PAGES.find((page) => page.key === personaKey);

    if (!auditedPage) {
      throw new Error(`Missing audited page definition for ${personaKey}`);
    }

    test(
      `solutions hub should route to ${personaKey} persona page `
        + '@allure.label.epic:Regression '
        + '@allure.label.feature:CriticalPaths '
        + '@allure.label.story:SolutionsPersonaRouting '
        + '@allure.label.severity:critical '
        + '@regression @critical @navigation',
      async ({ page }) => {
        await page.goto('/solutions', { waitUntil: 'networkidle' });

        const personaLink = page.locator(`a[href="${auditedPage.route}"]`).first();
        await expect(personaLink, `Expected persona link for ${auditedPage.route}`).toBeVisible();
        await personaLink.click();

        await expect(page).toHaveURL(new RegExp(`${auditedPage.route.replace('/', '\\/')}(?:#.*)?$`));
        await expect(page).toHaveTitle(auditedPage.titlePattern);
        await expect(page.getByRole('heading', { level: 1, name: auditedPage.heading })).toBeVisible();
      },
    );
  }

  test(
    'desktop header solutions menu should expose all persona destinations '
      + '@allure.label.epic:Regression '
      + '@allure.label.feature:CriticalPaths '
      + '@allure.label.story:HeaderSolutionsMenu '
      + '@allure.label.severity:critical '
      + '@regression @critical @navigation',
    async ({ page, isMobile }) => {
      test.skip(isMobile, 'Desktop-only header dropdown validation.');

      const layout = new SiteLayoutPage(page);
      await page.goto('/', { waitUntil: 'networkidle' });
      await layout.clickHeaderNav('Solutions', '/solutions');
      await expect(page).toHaveURL(/\/solutions(?:#.*)?$/);

      for (const personaKey of personaPages) {
        const auditedPage = AUDITED_PAGES.find((entry) => entry.key === personaKey);
        if (!auditedPage) {
          throw new Error(`Missing audited page definition for ${personaKey}`);
        }

        await page.goto('/', { waitUntil: 'networkidle' });
        await layout.clickHeaderNav('Solutions', auditedPage.route);
        await expect(page).toHaveURL(new RegExp(`${auditedPage.route.replace('/', '\\/')}(?:#.*)?$`));
      }
    },
  );
});
