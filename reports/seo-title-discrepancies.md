# SEO Title Discrepancies (Resolved)

Title mismatches were observed during Chromium timeout investigation and validated against live `stg`.

| Route | Expected regex (from `src/data/routes.ts`) | Current live title (`stg`) |
|---|---|---|
| `/solutions` | `/Mirion Radiopharma Solutions \| Overview/i` | `Mirion Radiopharma | Explore Solutions` |
| `/drug-owners-developers` | `/Radiopharma Drug Development Solutions \| Mirion/i` | `Solutions for Drug Owners and Developers | Mirion Radiopharma` |

## Notes

- Route baselines were updated in `src/data/routes.ts` to match live title and heading contracts.
- `test.fixme(...)` gates were removed from page and metadata specs for these routes.
- Canonical and `og:type` metadata are still missing on `stg`; these are tracked by `tests/regression/seo-meta/metadata.spec.ts`.
