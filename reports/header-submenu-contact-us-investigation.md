# Header Submenu Investigation: `/contact-us` vs `/`

Objective: re-investigate the residual header-navigation behavior and determine whether `/contact-us` submenu exposure is stable or flaky.

## MCP Reproduction Setup

- Browser: Chromium
- Viewport: `1280x720`
- Interaction under test: click `header button:has-text("Solutions")`, then inspect header links for `/solutions`
- Additional flake check: run the `/contact-us` interaction **5 times in a row**

## Side-by-Side DOM Snapshot (`/contact-us` vs `/`)

When the submenu is visible, both pages expose the same primary list container and targets:

```html
<ol aria-label="Main menu" id="mainMenu">
  <li><a href="/drug-owners-developers">For Drug Owners & Developers</a></li>
  <li><a href="/isotope-producers-radiopharmacies">For Isotope Producers & Radiopharmacies</a></li>
  <li><a href="/hospitals-clinical-sites">For Hospitals & Clinical Sites</a></li>
  <li><a href="/solutions">Full Suite of Solutions</a></li>
</ol>
```

This same structure was captured on `/contact-us` and `/` when the menu stayed open.

## `/contact-us` Flake Check (5 Attempts)

| Attempt | `/solutions` exposed in submenu | Observed state |
|---|---|---|
| 1 | No | Menu collapsed immediately (`aria-expanded: false`, no primary links visible) |
| 2 | Yes | Stable open menu (`aria-expanded: true`, 4 primary links visible) |
| 3 | No | Menu collapsed immediately (`aria-expanded: false`, no primary links visible) |
| 4 | Yes | Stable open menu (`aria-expanded: true`, 4 primary links visible) |
| 5 | Yes | Stable open menu (`aria-expanded: true`, 4 primary links visible) |

Summary:
- Exposed `/solutions`: **3 / 5**
- Did not expose `/solutions`: **2 / 5**

## Link List When Menu Is Visible

- `/drug-owners-developers` — For Drug Owners & Developers
- `/isotope-producers-radiopharmacies` — For Isotope Producers & Radiopharmacies
- `/hospitals-clinical-sites` — For Hospitals & Clinical Sites
- `/solutions` — Full Suite of Solutions

## Visible DOM Difference: Success vs Failure

- **Successful attempts (2, 4, 5):**
  - `button[Solutions]` shows `aria-expanded="true"`
  - Header contains visible `<ol id="mainMenu">` with 4 expected links (including `/solutions`)
- **Failed attempts (1, 3):**
  - `button[Solutions]` observed as `aria-expanded="false"` shortly after click
  - No visible primary submenu links in header
  - No visible `/solutions` target to click

This is a timing/state flake pattern, not a deterministic content mismatch in submenu entries.

## Screenshots

- Attempt 1: `reports/screenshots/header-submenu-contact-us-attempt-1-2026-04-22T16-30-47-498Z.png`
- Attempt 2: `reports/screenshots/header-submenu-contact-us-attempt-2-2026-04-22T16-31-08-781Z.png`
- Attempt 3: `reports/screenshots/header-submenu-contact-us-attempt-3-2026-04-22T16-31-30-318Z.png`
- Attempt 4: `reports/screenshots/header-submenu-contact-us-attempt-4-2026-04-22T16-31-49-970Z.png`
- Attempt 5: `reports/screenshots/header-submenu-contact-us-attempt-5-2026-04-22T16-32-04-894Z.png`
- Cross-page baseline (`/`): `reports/screenshots/header-submenu-home-open-2026-04-22T16-06-35-737Z.png`

## Conclusion

- `/contact-us` submenu behavior is **flaky** under repeated automated interaction.
- Evidence supports a real timing/state instability:
  - sometimes the Solutions menu remains open and exposes `/solutions`
  - sometimes it collapses before target lookup
- This can explain why the prior residual P2 failure disappeared on one run without additional fix code.