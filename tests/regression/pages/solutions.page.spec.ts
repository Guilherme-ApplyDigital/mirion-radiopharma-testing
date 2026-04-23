import { test } from '../../../src/fixtures/test-fixtures';
import { AUDITED_PAGES } from '../../../src/data/routes';
import { verifyAuditedPageContract } from '../support/page-contract';

const auditedPage = AUDITED_PAGES.find((page) => page.key === 'solutions');

if (!auditedPage) {
  throw new Error('Missing route config for solutions');
}

test(
  'should load solutions page with correct title and heading '
    + '@allure.label.epic:Regression '
    + '@allure.label.feature:Pages '
    + '@allure.label.story:solutions '
    + '@allure.label.severity:critical '
    + '@smoke @regression @critical',
  async ({ page, baseURL }, testInfo) => {
    if (!baseURL) {
      throw new Error('BASE_URL is required for regression tests.');
    }

    await verifyAuditedPageContract(page, baseURL, auditedPage, testInfo);
  },
);
