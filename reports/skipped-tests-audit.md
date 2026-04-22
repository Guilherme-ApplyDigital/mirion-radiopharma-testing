# Skipped Tests Audit (Chromium Regression)

Source: `test-results/results.json` from latest `npm run test:regression -- --project=chromium` run.

Total skipped tests: **8**

## Breakdown

### Intentional `fixme` skips (4)

These are intentional and trace back to the SEO title discrepancy triage.

1. `tests/regression/pages/drug-owners-developers.page.spec.ts`
   - Test: "should load drug owners developers page with correct title and heading ..."
   - Annotation: `fixme`
   - Reason: `Pending product/marketing confirmation — see reports/seo-title-discrepancies.md`

2. `tests/regression/pages/solutions.page.spec.ts`
   - Test: "should load solutions page with correct title and heading ..."
   - Annotation: `fixme`
   - Reason: `Pending product/marketing confirmation — see reports/seo-title-discrepancies.md`

3. `tests/regression/seo-meta/metadata.spec.ts`
   - Test: "should expose canonical and social metadata on solutions ..."
   - Annotation: `fixme`
   - Reason: `Pending product/marketing confirmation — see reports/seo-title-discrepancies.md`

4. `tests/regression/seo-meta/metadata.spec.ts`
   - Test: "should expose canonical and social metadata on drug-owners-developers ..."
   - Annotation: `fixme`
   - Reason: `Pending product/marketing confirmation — see reports/seo-title-discrepancies.md`

### Conditional `skip` tests (4)

These are also intentional and are scoped to mobile projects only.

5. `tests/regression/pages/mobile-rendering.spec.ts`
   - Test: "should render home page without horizontal overflow ..."
   - Annotation: `skip`
   - Reason: `Mobile-only regression coverage.`

6. `tests/regression/pages/mobile-rendering.spec.ts`
   - Test: "should render about-us page without horizontal overflow ..."
   - Annotation: `skip`
   - Reason: `Mobile-only regression coverage.`

7. `tests/regression/pages/mobile-rendering.spec.ts`
   - Test: "should render contact-us page without horizontal overflow ..."
   - Annotation: `skip`
   - Reason: `Mobile-only regression coverage.`

8. `tests/regression/pages/mobile-rendering.spec.ts`
   - Test: "should render solutions page without horizontal overflow ..."
   - Annotation: `skip`
   - Reason: `Mobile-only regression coverage.`

## Silent-Precondition Check

- No skipped test in this run was caused by missing credentials, missing fixture, or hidden runtime precondition.
- All 8 skips were explicit via Playwright annotations (`fixme` or `skip`) with clear descriptions.
