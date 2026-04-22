# Flake Investigation

This document captures patterns manually verified as `environment-flake` (intermittent / non-deterministic) and intentionally not fixed yet.

## 1) `/contact-us` header submenu intermittently collapses

- Classification: `environment-flake`
- Pattern: `Header button "Solutions" opened, but no submenu target matched route "/solutions".`
- Affected spec: `tests/regression/navigation/header-navigation.spec.ts`
- Severity suggestion: **Medium** (intermittent navigation test instability)

### MCP verification

- Reproduced interaction 5 times in a row on `/contact-us` with Chromium at `1280x720`.
- Results:
  - submenu exposed `/solutions`: **3/5**
  - submenu did not expose `/solutions`: **2/5**
- Failure attempts showed:
  - button `aria-expanded="false"` shortly after click
  - no visible primary submenu links
- Success attempts showed:
  - button `aria-expanded="true"`
  - visible `<ol id="mainMenu">` including `/solutions`

### Evidence

- Report: `reports/header-submenu-contact-us-investigation.md`
- Screenshots:
  - `reports/screenshots/header-submenu-contact-us-attempt-1-2026-04-22T16-30-47-498Z.png`
  - `reports/screenshots/header-submenu-contact-us-attempt-2-2026-04-22T16-31-08-781Z.png`
  - `reports/screenshots/header-submenu-contact-us-attempt-3-2026-04-22T16-31-30-318Z.png`
  - `reports/screenshots/header-submenu-contact-us-attempt-4-2026-04-22T16-31-49-970Z.png`
  - `reports/screenshots/header-submenu-contact-us-attempt-5-2026-04-22T16-32-04-894Z.png`

### Hypothesis

- Menu state is timing-sensitive under automation; target lookup can run during a collapsed state.

---

## 2) Console error contract mismatch (did not reproduce in MCP)

- Classification: `environment-flake` (inconclusive)
- Pattern: `Console errors found: ...` in page-contract tests
- Affected specs:
  - `tests/regression/pages/home.page.spec.ts`
  - `tests/regression/pages/about-us.page.spec.ts`
  - `tests/regression/pages/contact-us.page.spec.ts`
  - `tests/regression/pages/isotope-producers-radiopharmacies.page.spec.ts`
  - `tests/regression/pages/hospitals-clinical-sites.page.spec.ts`
- Severity suggestion: **Low-Medium** (quality signal instability)

### MCP verification

- Fresh-browser checks per page (`playwright_close` + `playwright_navigate` + `playwright_console_logs`) did **not** reproduce the previously reported sandbox `about:blank` error.
- Observed logs in MCP were mostly warnings (e.g., WebGL performance warnings), not the asserted error string from failing run output.
- The exact failure text from test output could not be reproduced deterministically in MCP during this pass.

### Evidence

- MCP logs captured during manual run:
  - home: warnings only
  - about-us: warnings only
  - contact-us: warnings only
  - isotope/hospitals: warnings only
- Supporting screenshots:
  - `reports/screenshots/manual-console-home-2026-04-22T17-12-42-034Z.png`
  - `reports/screenshots/manual-console-about-us-2026-04-22T17-13-02-424Z.png`
  - `reports/screenshots/manual-console-contact-us-2026-04-22T17-13-12-805Z.png`
  - `reports/screenshots/manual-console-isotope-2026-04-22T17-13-50-498Z.png`
  - `reports/screenshots/manual-console-hospitals-2026-04-22T17-13-37-308Z.png`

### Hypothesis

- Third-party scripts/iframes may emit intermittent console noise depending on load order, sandbox state, or external script availability.
