# Timeout Investigation (Chromium)

Date: 2026-04-22  
Environment: `chromium`, viewport `1280x720`, unauthenticated, `https://stg.radiopharma.miriontest.net/`

## Scope and Count Reconciliation

- I parsed timeout-backed failures from `test-results/results.json` before opening MCP browser sessions.
- The run contains **25 timeouts in your prior timeout bucket**, plus **3 timeout-signature assertion failures** (same root cause family, but previously grouped under non-timeout assertion categories), for **28 timeout-signature failures total**.
- This report investigates all timeout signatures so nothing is hidden.

## Pre-Browser Clustering (from results JSON)

| Pattern | Count | Timed out locator/assertion | Spec file(s) | URL(s) |
|---|---:|---|---|---|
| P1 | 7 | `expect(page.locator('header')).toBeVisible()` (strict-mode violation due multi-match) | `tests/regression/content/accessibility-basics.spec.ts` | `/`, `/about-us`, `/contact-us`, `/solutions`, `/drug-owners-developers`, `/isotope-producers-radiopharmacies`, `/hospitals-clinical-sites` |
| P2 | 7 | header action timing out in `clickHeaderLink('Solutions')` (`locator.click` test timeout) | `tests/regression/navigation/header-navigation.spec.ts` | same 7 audited source pages |
| P3 | 6 | footer action timing out in `clickFooterLink('About Us'/'Contact Us')` (`locator.click` test timeout) | `tests/regression/navigation/footer-navigation.spec.ts` | all audited pages except `/contact-us` |
| P4 | 3 | `contactPage.submitButton.click()` where submit locator is `/submit\|send/i` | `tests/regression/forms/contact-form.spec.ts` | `/contact-us` |
| P5 | 4 | `expect(page).toHaveTitle(...)` timing out | `tests/regression/pages/solutions.page.spec.ts`, `tests/regression/pages/drug-owners-developers.page.spec.ts`, `tests/regression/seo-meta/metadata.spec.ts` | `/solutions`, `/drug-owners-developers` |
| P6 | 1 | `expect(page.locator('#<uuid>')).toHaveCount(1)` timeout | `tests/regression/links/internal-link-integrity.spec.ts` | `/hospitals-clinical-sites#12e79609-2e70-4e51-ae7b-ab759f23d387` |

## Pattern Table (Root Cause + Fix Classification)

| Pattern | Count | Root cause (one sentence) | Fix class | Estimated fixes |
|---|---:|---|---|---:|
| P1 | 7 | `locator('header')` is ambiguous on this site (many `<header>` nodes), so strict mode fails before visibility can be asserted. | spec-fix | 7 |
| P2 | 7 | Header test expects a **link** named "Solutions", but UI exposes it as a **button** trigger. | framework-fix | 7 |
| P3 | 6 | Footer page object binds `page.locator('footer').first()`, which points to content-card footers, not the global site footer. | framework-fix | 6 |
| P4 | 3 | Contact page object expects submit button text matching `/submit\|send/i`, but actual CTA is "Request Consultation". | framework-fix | 3 |
| P5 | 4 | Title regex expectations are stale relative to current production title strings and never become true. | spec-fix (or real-bug if title contract is mandatory) | 4 |
| P6 | 1 | Anchor CSS selector uses raw `#<uuid>` starting with a digit, which is invalid CSS even when element exists. | spec-fix | 1 |

## Per-Pattern Evidence and Diagnosis

### P1 - Strict-mode locator conflict on `header` (7)

- Timed assertion: `expect(page.locator('header')).toBeVisible()`.
- Results evidence: failure payload explicitly shows **strict mode violation** with multiple `header` matches.
- MCP reproduction:
  - On `/solutions`, `document.querySelectorAll('header').length = 42`, visible headers = 38.
  - Element exists immediately; this is not delayed rendering.
  - Not iframe/shadow related (`window.top === window`, standard DOM).
  - No consent modal intercept observed at timeout moment.
  - Network state when checked: `readyState=complete`, `domContentLoaded ~1010ms`, `load ~1012ms`, no resources >3s.
- Screenshot: `reports/screenshots/timeout-pattern-accessibility-header-strict-solutions-2026-04-22T15-38-48-165Z.png`
- Diagnosis: test selector is too broad for semantic-rich pages with repeated section headers.
- Proposed fix: replace with specific landmark selector (`getByRole('banner')` or stable layout test id).

### P2 - Header "Solutions" treated as link, but it is a button (7)

- Timed action family: `clickHeaderLink('Solutions')` inside header navigation loop.
- Results evidence: test-level timeout with `locator.click: Test timeout of 60000ms exceeded`.
- MCP reproduction:
  - First header contains `About Us` link count `1`, `Contact Us` link count `1`, `Solutions` link count `0`.
  - First header contains `Solutions` button count `1`.
  - Poll over 15s: `a[href="/solutions"]` in first header never appears.
  - Direct click reproduction: `page.click('header a[href="/solutions"]')` => `Timeout 30000ms exceeded`.
  - Not iframe/shadow/overlay; page is already complete (`domContentLoaded ~245ms`, `load ~338ms`).
- Screenshots:
  - `reports/screenshots/timeout-pattern-header-nav-home-2026-04-22T15-38-20-722Z.png`
  - `reports/screenshots/timeout-pattern-header-click-action-timeout-2026-04-22T15-40-41-310Z.png`
- Diagnosis: navigation object assumes link semantics for all header items; menu trigger is button-driven.
- Proposed fix: add a `clickHeaderMenuOrLink()` abstraction in `SiteLayoutPage` that handles both link and button + submenu selection.

### P3 - Footer scope points to wrong footer element (6)

- Timed action family: `clickFooterLink(...)` scoped to `page.locator('footer').first()`.
- MCP reproduction:
  - On `/`, first footer class: `"flex justify-between flex-col items-start"` (card footer), text sample starts with "Close data gaps...".
  - In **first** footer: `About Us` count `0`, `Contact Us` count `0`.
  - Across all footers on page: `About Us` links exist (`2`), but outside the first footer.
  - Poll 15s in first footer: link never appears.
- Screenshot: `reports/screenshots/timeout-pattern-footer-nav-home-2026-04-22T15-38-30-579Z.png`
- Diagnosis: page object binds to first semantic footer, not the global site footer.
- Proposed fix: target the global footer using stable container selector / landmark relation, then resolve links inside that container.

### P4 - Contact submit button locator mismatch (3)

- Timed action family: `contactPage.submitButton.click()` in all three contact form tests.
- Current locator: `getByRole('button', { name: /submit|send/i }).first()`.
- MCP reproduction:
  - Form with `#firstname` exists and is visible.
  - Buttons in form:
    - hidden `"Run reCAPTCHA"` button
    - visible submit button `#contactSubmit` with text `"Request Consultation"`.
  - `/submit|send/i` matches `0` buttons even after 15s.
  - Not iframe/shadow/overlay (`inIframe=false`, `inShadowRoot=false`, cookie not visible).
  - Page loading finished quickly (`domContentLoaded ~881ms`, `load ~896ms`).
- Screenshot: `reports/screenshots/timeout-pattern-contact-submit-mismatch-2026-04-22T15-39-04-426Z.png`
- Diagnosis: submit button naming assumption is wrong for current CTA text.
- Proposed fix: bind by stable id (`#contactSubmit`) or form submit role without brittle text regex.

### P5 - Title expectation never matches (4)

- Timed assertion: `expect(page).toHaveTitle(pattern)` for `/solutions` and `/drug-owners-developers`.
- MCP reproduction:
  - `/solutions` actual title remains `"Mirion Radiopharma | Explore Solutions"` during 12s sampling (never matches expected `/Mirion Radiopharma Solutions \| Overview/i`).
  - `/drug-owners-developers` actual title is `"Solutions for Drug Owners and Developers | Mirion Radiopharma"` (mismatch against expected regex in routes data).
  - This is not delayed hydration; title is stable across samples.
- Screenshots:
  - `reports/screenshots/timeout-pattern-title-mismatch-solutions-2026-04-22T15-39-17-498Z.png`
  - `reports/screenshots/timeout-pattern-title-mismatch-drug-owners-2026-04-22T15-39-34-862Z.png`
- Diagnosis: baseline title contract in `src/data/routes.ts` is outdated versus current staging behavior.
- Proposed fix: update title baselines to current approved canonical strings, or classify as app SEO bug if marketing-approved titles should be different.

### P6 - Anchor exists, selector syntax is invalid for numeric-leading id (1)

- Timed assertion: `expect(page.locator('#12e79609-...')).toHaveCount(1)`.
- MCP reproduction on `/hospitals-clinical-sites#12e79609-...`:
  - `document.getElementById('12e79609-...')` => `true` (element exists).
  - `document.querySelector('#12e79609-...')` throws syntax error (invalid CSS selector).
  - Escaped selector (`#\\31 2e79609-...`) resolves correctly.
- Screenshot: `reports/screenshots/timeout-pattern-missing-anchor-hospitals-2026-04-22T15-39-47-873Z.png`
- Diagnosis: selector construction is invalid for ids starting with a digit.
- Proposed fix: use `page.locator([id="${hash}"])` or `CSS.escape(hash)` before building selector.

## Prioritized Fix List (Framework-first)

1. **Framework-fix:** harden `SiteLayoutPage` header interaction to support button-triggered nav entries (resolves ~7).  
2. **Framework-fix:** bind footer methods to global site footer container (resolves ~6).  
3. **Framework-fix:** update `ContactPage.submitButton` locator to stable selector (`#contactSubmit`) (resolves ~3).  
4. **Spec-fix:** replace ambiguous `page.locator('header')` assertion with landmark-scoped selector (`banner`) (resolves ~7).  
5. **Spec-fix:** escape numeric-leading anchor ids in anchor integrity test (resolves ~1).  
6. **Spec/contract decision:** update title baselines or log app SEO bug with product/marketing (resolves ~4).

## Real-Bug Candidates (from timeout investigation)

- **None confirmed as hard application defects from timeout evidence alone.**
- P5 (title mismatch) can be promoted to **real-bug** if your approved SEO title contract matches the current expected regexes and staging output is wrong.

## Net Impact Estimate

- If all recommended fixes are applied, estimated timeout-signature resolution is **~28/28** in this run family (or **25/25** for the original timeout bucket).
