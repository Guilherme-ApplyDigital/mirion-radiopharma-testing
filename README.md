# Mirion Radiopharma E2E Framework

Production-ready Playwright + TypeScript + Allure framework with fixture-driven tests, Page Objects, CI nightly runs, and post-run failure analysis.

## Setup

1. Install dependencies:
   - `npm ci`
2. Install Playwright browsers:
   - `npx playwright install`
3. Create local env file:
   - `cp .env.example .env`
   - Fill `MIRION_ENV`, `MIRION_BASE_URL` (and optionally `BASE_URL`), `APP_USERNAME`, and `APP_PASSWORD`.

## Local Run

- Full suite: `npm test`
- CI-style run with JSON + Allure: `npm run test:ci`
- Smoke: `npm run test:smoke`
- Regression: `npm run test:regression`

## Reports

- Generate and open Allure report: `npm run report`
- Playwright HTML report is generated in `playwright-report/`
- Failure analysis summary: `npm run analyze`

## MCP Debugging Workflow

Playwright MCP is for local debugging only (not CI):

1. Start MCP server:
   - `npx @playwright/mcp@latest`
2. Connect your agent/client to the server.
3. Drive and inspect the browser state interactively against `BASE_URL`.

## CI Overview

- `nightly.yml`
  - Scheduled at `01:00 UTC` (22:00 BRT) and can also be triggered manually.
  - Runs Chromium-only in CI (`CI_PROJECTS=chromium` + `--project=chromium`) while preserving local multi-project definitions.
  - Restores/saves Allure trend history, generates the Allure report with CI metadata, uploads artifacts, runs failure analysis, and finalizes status after diagnostics are captured.
  - Updates dashboard and deploys GitHub Pages only on `main` using the `always() && !cancelled() && github.ref == 'refs/heads/main'` guard.

- `on-demand.yml`
  - Manual execution with selectable suite (`all`, `smoke`, `regression`).
  - Uploads artifacts and runs failure analysis for ad-hoc triage.

## Dashboard & Nightly Runs

- Dashboard architecture follows the `report-history` pattern:
  - `.github/workflows/nightly.yml` clones/pulls `report-history` into `.pages-site`.
  - `scripts/update-pages-history-site.mjs` copies the current `allure-report/` to `reports/<env>/<runStamp>/`, updates `reports/history.json`, builds `index.html`, and links the latest `reports/REGRESSION_ANALYSIS_*.md` when present.
  - The workflow commits back to `report-history`, uploads `.pages-artifact`, and deploys with `actions/deploy-pages`.
- Public dashboard URL format (GitHub Pages): `https://<owner>.github.io/<repo>/`.
- Branch mirror URL: `https://github.com/<owner>/<repo>/tree/report-history`.
- Required one-time repo setting: **Settings -> Pages -> Source = GitHub Actions**.
- Manual nightly trigger: **Actions -> Nightly E2E -> Run workflow**.
- Retention:
  - Configurable env var `MAX_DASHBOARD_RUNS` (default `30`).
  - When history exceeds the limit, oldest runs are removed from `reports/history.json` and from disk (`reports/<env>/<runStamp>/`) before artifact upload.
  - Cleanup log format: `Pruned N old runs: <run stamps>`.

## Notes

- Artifact capture is enabled on failure only (`screenshot`, `video`, `trace`) to keep build size low.
- Secrets are not hardcoded; use `.env` locally and GitHub Secrets in CI.

## Regression Suite

### What it covers

- Page-level contracts on audited routes: status, title, h1, console/network error gates, screenshots.
- Navigation integrity: header links, footer links, logo-to-home behavior.
- Content checks: image rendering after scroll, baseline accessibility checks.
- Form checks: contact-form required validation, invalid input handling, mocked safe submission path.
- Link checks: discovered internal routes + anchor targets + external link resolution/attributes.
- SEO/meta checks: description, canonical, and OG tags.
- Mobile checks: key routes on the `mobile-chrome` project.

### How to run

- Full regression suite:
  - `npm run test:regression`
- Chromium-only regression:
  - `npm run test:regression -- --project=chromium`
- Mobile-only regression:
  - `npm run test:regression -- --project=mobile-chrome`

### Tag filtering

Examples using test title tags:

- Navigation subset:
  - `npm run test:regression -- --grep "@navigation"`
- Content subset:
  - `npm run test:regression -- --grep "@content"`
- Critical subset:
  - `npm run test:regression -- --grep "@critical"`
- Smoke subset:
  - `npm run test:regression -- --grep "@smoke"`

### Reading results

- Playwright HTML report: `playwright-report/index.html`
- Allure report (generate/open): `npm run report`
- Traceability map from audit to tests: `tests/regression/COVERAGE.md`
