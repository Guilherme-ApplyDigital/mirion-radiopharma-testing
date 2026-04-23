import { test } from '../../../src/fixtures/test-fixtures';
import { AUDITED_PAGES } from '../../../src/data/routes';
import { verifyAuditedPageContract } from '../support/page-contract';

const auditedPage = AUDITED_PAGES.find((page) => page.key === 'drug-owners-developers');

if (!auditedPage) {
  throw new Error('Missing route config for drug-owners-developers');
}

test(
  'should load drug owners developers page with correct title and heading '
    + '@allure.label.epic:Regression '
    + '@allure.label.feature:Pages '
    + '@allure.label.story:drug-owners-developers '
    + '@allure.label.severity:critical '
    + '@smoke @regression @critical',
  async ({ page, baseURL }, testInfo) => {
    if (!baseURL) {
      throw new Error('BASE_URL is required for regression tests.');
    }

    await verifyAuditedPageContract(page, baseURL, auditedPage, testInfo);
  },
);
