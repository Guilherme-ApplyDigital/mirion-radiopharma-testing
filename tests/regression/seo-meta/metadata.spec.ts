import { test, expect } from '../../../src/fixtures/test-fixtures';
import { AUDITED_PAGES } from '../../../src/data/routes';

test.describe('SEO metadata', () => {
  test.describe.parallel('audited pages', () => {
    for (const auditedPage of AUDITED_PAGES) {
      test(
        `should expose canonical and social metadata on ${auditedPage.key} `
          + '@allure.label.epic:Regression '
          + '@allure.label.feature:SeoMeta '
          + '@allure.label.story:MetadataContract '
          + '@allure.label.severity:normal '
          + '@regression',
        async ({ page, baseURL }) => {
          if (!baseURL) {
            throw new Error('BASE_URL is required for regression tests.');
          }

          await page.goto(auditedPage.route, { waitUntil: 'networkidle' });
          await expect(page).toHaveTitle(auditedPage.titlePattern);

          const metadata = await page.evaluate(() => {
            const byName = (name: string) =>
              document.querySelector(`meta[name="${name}"]`)?.getAttribute('content') ?? '';
            const byProperty = (property: string) =>
              document.querySelector(`meta[property="${property}"]`)?.getAttribute('content') ?? '';
            const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '';

            return {
              description: byName('description'),
              canonical,
              ogTitle: byProperty('og:title'),
              ogDescription: byProperty('og:description'),
              ogType: byProperty('og:type'),
            };
          });

          expect(metadata.description).not.toEqual('');
          expect(metadata.canonical).not.toEqual('');
          expect(metadata.canonical.startsWith(baseURL)).toBeTruthy();
          expect(metadata.ogTitle).not.toEqual('');
          expect(metadata.ogDescription).not.toEqual('');
          expect(metadata.ogType).not.toEqual('');
        },
      );
    }
  });
});
