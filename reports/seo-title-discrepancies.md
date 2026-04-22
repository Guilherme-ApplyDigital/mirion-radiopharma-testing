# SEO Title Discrepancies (Pending Triage)

These title mismatches were observed during Chromium timeout investigation and are pending product/marketing confirmation.

| Route | Expected regex (from `src/data/routes.ts`) | Current live title (`stg`) |
|---|---|---|
| `/solutions` | `/Mirion Radiopharma Solutions \| Overview/i` | `Mirion Radiopharma | Explore Solutions` |
| `/drug-owners-developers` | `/Radiopharma Drug Development Solutions \| Mirion/i` | `Solutions for Drug Owners and Developers | Mirion Radiopharma` |

## Notes

- Tests for these title contracts are marked with `test.fixme(...)` until triage is complete.
- If product/marketing confirms current live titles are correct, update the route baselines and remove `fixme`.
- If product/marketing confirms expected titles are correct, open an application bug and keep the regression assertion as-is.
