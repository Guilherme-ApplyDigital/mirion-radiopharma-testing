# Final Execution Report

## Scope Completed

This round completed:

1. Manual MCP verification across all remaining failure patterns (real browser, Chromium `1280x720`).
2. Pattern classification into:
   - `confirmed-app-bug`
   - `spec-bug`
   - `environment-flake`
   - `known-limitation`
3. Fixes applied **only** for `spec-bug` and `known-limitation` patterns.
4. Fresh regression run + Allure regeneration.

## Manual Verification Summary

### Footer strict-mode ambiguity (6, historical pattern)
- MCP result: `reproduces` as selector ambiguity when using raw `footer`, but one global contentinfo landmark is consistently present.
- Classification: `spec-bug`
- Action: already fixed via `getByRole('contentinfo')`.
- Outcome: resolved in current run.

### Console errors (5)
- MCP result: focused pass (5 pages x 3 fresh loads) produced only browser-noise warnings and no first-party error signatures.
- Classification: `spec-bug` (contract too broad for current signal quality).
- Action: applied Phase F.1 first-party console filter + centralized noise policy + filtered-noise Allure attachment.
- Outcome: resolved in current run (`0` console assertion failures).

### Missing canonical (5)
- MCP result: `reproduces` on all 5 pages; `link[rel="canonical"]` absent.
- Classification: `confirmed-app-bug`
- Action: no test masking; documented in `reports/app-bugs-for-triage.md`.
- Outcome: still failing (5).

### Broken images (4 pages)
- MCP result: `does-not-reproduce` manually after scroll; flagged URLs returned `200` in direct browser fetch checks.
- Classification: `spec-bug`
- Action: hardened image collection logic to avoid transient lazy-load false positives.
- Outcome: resolved in current run.

### LinkedIn 999
- MCP result: browser navigation lands on LinkedIn authwall (`200`), while API probe pattern remains bot-protection dependent.
- Classification: `known-limitation`
- Action: allow `999` for LinkedIn URL expectations.
- Outcome: resolved in current run.

### `/contact-us` submenu behavior
- MCP result: `flaky` (combined direct MCP attempts => `/solutions` exposed `11/15`, missing `4/15`).
- Classification: `environment-flake` with framework-race recommendation.
- Action: no masking fix applied; recommended explicit open-state wait sequence documented in `reports/flake-investigation.md`.
- Outcome: not failing in the final rerun, but still classified as flaky risk.

## Previous vs Current Results

- Previous run before this round: **36 passed / 10 failed / 8 skipped**
- Current run after this round: **40 passed / 6 failed / 8 skipped**
- Net delta: **+4 passed / -4 failed / 0 skipped**

Historical reference from early stabilization stage:
- Earlier Chromium baseline: **7 passed / 43 failed / 4 skipped**

## Per-Pattern Outcome Table

| Pattern | Classification | Action taken | Result |
|---|---|---|---|
| Footer strict-mode ambiguity | `spec-bug` | Asserted landmark instead of broad footer selector | Resolved |
| Console error contract | `spec-bug` | Filtered to first-party errors only; attached filtered noise for audit | Resolved |
| Canonical missing | `confirmed-app-bug` | No masking; documented for product triage | Still red (5) |
| Broken image integrity | `spec-bug` | Stabilized image-load validation logic | Resolved |
| LinkedIn 999 | `known-limitation` | Allowed anti-bot `999` statuses for LinkedIn checks | Resolved |
| `/contact-us` submenu | `environment-flake` | No masking; evidence report with 15-attempt flake capture and wait-strategy recommendation | Non-deterministic risk (green in final run) |

## Commits Made This Round

- `5dea6de` — Stabilize image integrity checks around lazy loading.
- `45a0950` — Allow LinkedIn anti-bot status in external link checks.
- `8f48c7f` — Document manual MCP verification findings and classifications.
- `b4d4797` — Prevent image integrity checks from timing out test budget.
- `974428d` — Phase F.1: enforce first-party console error contract.

## Allure Report

- Path: `allure-report/index.html`

## What's Still Red and Why

1. **5 failures: canonical metadata assertions**
   - Why red: canonical tags are genuinely absent on core pages in manual MCP checks.
   - Classification: `confirmed-app-bug`
   - Next decision needed: product/SEO implementation fix in app, then keep assertions as-is.

2. **1 failure: contact form mocked submission contract**
   - Why red: mocked submission test did not observe expected POST during run.
   - Classification: pending triage (`other`)
   - Next decision needed: verify current form submission endpoint pattern and route interception coverage.

3. **Known flake (not currently red, tracked): `/contact-us` submenu**
   - Why tracked: direct MCP interaction remains non-deterministic even when latest run is green.
   - Reproduction rate: **11/15** success, **4/15** failure to expose `/solutions` after click.
   - Classification: `environment-flake` (framework-race recommendation documented)
   - Reference: `reports/flake-investigation.md`
