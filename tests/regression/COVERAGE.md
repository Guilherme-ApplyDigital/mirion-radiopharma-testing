# Regression Coverage Mapping

This file maps exploratory audit findings to concrete regression specs.

## Mapping

- Per-page load contract (status/title/h1/no-console-errors/no-failed-network/screenshot)
  - `tests/regression/pages/home.page.spec.ts`
  - `tests/regression/pages/about-us.page.spec.ts`
  - `tests/regression/pages/contact-us.page.spec.ts`
  - `tests/regression/pages/solutions.page.spec.ts`
  - `tests/regression/pages/drug-owners-developers.page.spec.ts`
  - `tests/regression/pages/isotope-producers-radiopharmacies.page.spec.ts`
  - `tests/regression/pages/hospitals-clinical-sites.page.spec.ts`

- Header/footer navigation paths and logo behavior
  - `tests/regression/navigation/header-navigation.spec.ts`
  - `tests/regression/navigation/footer-navigation.spec.ts`

- Broken-image risk from exploratory snapshot
  - `tests/regression/content/image-integrity.spec.ts`

- Accessibility baseline checks (h1, alt, labels, landmarks, axe core rules)
  - `tests/regression/content/accessibility-basics.spec.ts`

- Contact form validation and safe mocked submission path
  - `tests/regression/forms/contact-form.spec.ts`

- Internal link integrity, non-404 redirect checks, and known anchor targets
  - `tests/regression/links/internal-link-integrity.spec.ts`

- External link integrity and bot-blocked/documented statuses
  - `tests/regression/links/external-link-integrity.spec.ts`

- Metadata contract (title, meta description, canonical, OG tags)
  - `tests/regression/seo-meta/metadata.spec.ts`

- Mobile rendering baseline for key routes
  - `tests/regression/pages/mobile-rendering.spec.ts`
