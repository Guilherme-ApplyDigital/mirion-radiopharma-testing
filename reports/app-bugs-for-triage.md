# App Bugs For Triage

This document includes failures manually verified in MCP as `confirmed-app-bug` and intentionally left failing.

## 1) Missing canonical link tags on key pages

- Classification: `confirmed-app-bug`
- Pattern: `expect(metadata.canonical).not.toEqual('')`
- Affected pages:
  - `/`
  - `/about-us`
  - `/contact-us`
  - `/isotope-producers-radiopharmacies`
  - `/hospitals-clinical-sites`
- Severity suggestion: **High** (SEO/canonicalization impact across core pages)

### MCP evidence

- Manual check on each page via `document.querySelector('link[rel="canonical"]')` returned `null`.
- `<head>` snippets captured during MCP checks show no `<link rel="canonical">` present.
- Supporting screenshots:
  - `reports/screenshots/manual-console-home-2026-04-22T17-12-42-034Z.png`
  - `reports/screenshots/manual-console-about-us-2026-04-22T17-13-02-424Z.png`
  - `reports/screenshots/manual-console-contact-us-2026-04-22T17-13-12-805Z.png`
  - `reports/screenshots/manual-console-isotope-2026-04-22T17-13-50-498Z.png`
  - `reports/screenshots/manual-console-hospitals-2026-04-22T17-13-37-308Z.png`

### Suggested owner

- Web platform / SEO implementation owner

### Suggested remediation direction

- Add page-level canonical tags aligned with production URL strategy.
- Ensure canonical generation is consistent across SSR and client transitions.
