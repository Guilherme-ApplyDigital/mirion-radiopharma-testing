# Remaining Failures Breakdown (Post Phase D.1)

Source: `test-results/results.json` from Chromium regression run.

## Pattern Table

| Signature | Pattern | Count | Root cause hypothesis | Fix class |
|---|---|---:|---|---|
| `timeout` | `expect(locator('footer')).toBeVisible() strict-mode ambiguity` | 6 | Footer selector is ambiguous because many content-card <footer> elements match before the global landmark. | `spec-fix` |
| `assertion` | `Page contract console-clean assertion fails` | 5 | Application emits console errors on several core pages; this is likely an app-level defect, not test synchronization. | `real-bug` |
| `assertion` | `expect(metadata.canonical).not.toEqual('')` | 5 | Canonical link tags are missing on multiple pages. | `real-bug` |
| `assertion` | `Broken image integrity on /about-us` | 1 | One or more image assets fail to load or return invalid dimensions. | `real-bug` |
| `assertion` | `Broken image integrity on /drug-owners-developers` | 1 | One or more image assets fail to load or return invalid dimensions. | `real-bug` |
| `assertion` | `Broken image integrity on /hospitals-clinical-sites` | 1 | One or more image assets fail to load or return invalid dimensions. | `real-bug` |
| `assertion` | `Broken image integrity on /isotope-producers-radiopharmacies` | 1 | One or more image assets fail to load or return invalid dimensions. | `real-bug` |
| `assertion` | `External link expectation mismatch` | 1 | At least one documented external-link expectation no longer matches runtime response/attribute behavior. | `spec-fix` |
| `other` | `Header submenu target lookup fails after button click on /contact-us` | 1 | Likely timing race after opening Solutions button; target lookup executes before submenu link becomes queryable. | `framework-fix` |

## Representative Evidence Snippets

### expect(locator('footer')).toBeVisible() strict-mode ambiguity (6)
- Signature: `timeout`
- Spec file: `regression/content/accessibility-basics.spec.ts`
- URL: `/`

```text
Error: expect(locator).toBeVisible() failed

Locator: locator('footer')
Expected: visible
Error: strict mode violation: locator('footer') resolved to 11 elements:
    1) <footer class="flex justify-between flex-col items-start">…</footer> aka getByTestId('or-container-services').getByRole('link', { name: 'Drug Owners and Developers' })
    2) <footer class="flex justify-between flex-col items-start">…</footer> aka getByTestId('or-container-services').getByRole('link', { name: 'Isotope Producers and' })
    3) <footer class="flex justify-between flex-col items-start">…</footer> aka getByRole('link', { name: 'Hospitals and Clinical Sites' })
    4) <footer class="flex justify-between flex-col items-start z-1 p-4">…</footer> aka getByRole('link').filter({ hasText: 'Explore all Solutions' })
    5) <footer class="flex justify-between flex-col items-start">…</footer> aka getByRole('link', { name: 'Exposure Risk to Staff and' })
    6) <footer class="flex justify-between flex-col items-start">…</footer> aka getByRole('link', { name: 'Isotope Purity Uncertainty' })
    7) <footer class="flex justify-between flex-col items-start">…</footer> aka getByRole('link', { name: 'Missed Doses from Planning' })
    8) <footer class="flex justify-between flex-col items-start">…</footer> aka getByRole('link', { name: 'Unclear Manufacturing Flow' })
    9) <footer class="flex justify-between flex-col items-start">…</footer> aka getByRole('link', { name: 'High-Energy Shielding Needs' })
    10) <footer class="flex justify-between flex-col items-start">…</footer> aka getByRole('link', { name: 'Order-to-Cash Friction' })
    ...

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('footer')


  20 |           await expect(page.getByRole('banner')).toBeVisible();
  21 |           await expect(page.locator('main')).toBeVisible();
> 22 |           await expect(page.locator('footer')).toBeVisible();
     |                                                ^
  23 |           await expect(page.locator('nav').first()).toBeVisible();
  24 |
  25 |           const missingImageAltCount = await page.locator('img:not([alt])').count();
    at /Users/guilhermeklein/Documents/GitHub/mirion/mirion-radiopharma-testing/tests/regression/content/accessibility-basics.spec.ts:22:48
```

### Page contract console-clean assertion fails (5)
- Signature: `assertion`
- Spec file: `regression/pages/about-us.page.spec.ts`

```text
Error: Console errors found:
Blocked script execution in 'about:blank' because the document's frame is sandboxed and the 'allow-scripts' permission is not set.

expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 3

- Array []
+ Array [
+   "Blocked script execution in 'about:blank' because the document's frame is sandboxed and the 'allow-scripts' permission is not set.",
+ ]

   at regression/support/telemetry.ts:58

  56 |
  57 | export async function assertNoPageErrors(tracker: Tracker): Promise<void> {
> 58 |   expect(tracker.consoleErrors, `Console errors found:\n${tracker.consoleErrors.join('\n')}`).toEqual([]);
     |                                                                                               ^
  59 |   expect(
  60 |     [...tracker.failedRequests, ...tracker.failedResponses],
  61 |     `Network failures found:\n${[...tracker.failedRequests, ...tracker.failedResponses].join('\n')}`,
    at assertNoPageErrors (/Users/guilhermeklein/Documents/GitHub/mirion/mirion-radiopharma-testing/tests/regression/support/telemetry.ts:58:95)
    at verifyAuditedPageContract (/Users/guilhermeklein/Documents/GitHub/mirion/mirion-radiopharma-testing/tests/regression/support/page-contract.ts:25:29)
    at /Users/guilhermeklein/Documents/GitHub/mirion/mirion-radiopharma-testing/tests/regression/pages/about-us.page.spec.ts:23:5
```

### expect(metadata.canonical).not.toEqual('') (5)
- Signature: `assertion`
- Spec file: `regression/seo-meta/metadata.spec.ts`
- URL: `/`

```text
Error: expect(received).not.toEqual(expected) // deep equality

Expected: not ""


  44 |
  45 |           expect(metadata.description).not.toEqual('');
> 46 |           expect(metadata.canonical).not.toEqual('');
     |                                          ^
  47 |           expect(metadata.canonical.startsWith(baseURL)).toBeTruthy();
  48 |           expect(metadata.ogTitle).not.toEqual('');
  49 |           expect(metadata.ogDescription).not.toEqual('');
    at /Users/guilhermeklein/Documents/GitHub/mirion/mirion-radiopharma-testing/tests/regression/seo-meta/metadata.spec.ts:46:42
```

### Broken image integrity on /about-us (1)
- Signature: `assertion`
- Spec file: `regression/content/image-integrity.spec.ts`
- URL: `/about-us`

```text
Error: Broken images found on /about-us:
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2Fc01d02e926ac245de547170521aabc556babe47c-954x796.png%3Fq%3D100&w=3840&q=75

expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 3

- Array []
+ Array [
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2Fc01d02e926ac245de547170521aabc556babe47c-954x796.png%3Fq%3D100&w=3840&q=75",
+ ]

  16 |           await page.goto(auditedPage.route, { waitUntil: 'networkidle' });
  17 |           const failures = await collectImageFailures(page);
> 18 |           expect(failures, `Broken images found on ${auditedPage.route}:\n${failures.join('\n')}`).toEqual([]);
     |                                                                                                    ^
  19 |         },
  20 |       );
  21 |     }
    at /Users/guilhermeklein/Documents/GitHub/mirion/mirion-radiopharma-testing/tests/regression/content/image-integrity.spec.ts:18:100
```

### Broken image integrity on /drug-owners-developers (1)
- Signature: `assertion`
- Spec file: `regression/content/image-integrity.spec.ts`
- URL: `/drug-owners-developers`

```text
Error: Broken images found on /drug-owners-developers:
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2Fc6ebb3799b8f72b50f64e17aff8696798c443dc9-2000x1387.jpg%3Fq%3D100&w=3840&q=75
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2Ff1103aef55d1cc7a7d9c164674f79347e3755cc0-2000x1125.jpg&w=3840&q=75
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2Fe5db5d55-4448-49b4-acd0-2d7ae3106fd7%2FRD1ABFVS1vDG6X6xAbORxaeGo%2FBmADqcLwzTCiwq1zuiLqv9i3R.png%3Ff%3Djpg%26w%3D400&w=3840&q=75
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2F3ceba44b-ddbf-48c7-8d6a-f801bb2a18fb%2FApNZseggl7cr8Y1CNJdLmrlpk%2FbZSUUzOvsm0Ah6DigVZafsL58.png%3Ff%3Djpg%26w%3D400&w=3840&q=75

expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 6

- Array []
+ Array [
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2Fc6ebb3799b8f72b50f64e17aff8696798c443dc9-2000x1387.jpg%3Fq%3D100&w=3840&q=75",
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2Ff1103aef55d1cc7a7d9c164674f79347e3755cc0-2000x1125.jpg&w=3840&q=75",
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2Fe5db5d55-4448-49b4-acd0-2d7ae3106fd7%2FRD1ABFVS1vDG6X6xAbORxaeGo%2FBmADqcLwzTCiwq1zuiLqv9i3R.png%3Ff%3Djpg%26w%3D400&w=3840&q=75",
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2F3ceba44b-ddbf-48c7-8d6a-f801bb2a18fb%2FApNZseggl7cr8Y1CNJdLmrlpk%2FbZSUUzOvsm0Ah6DigVZafsL58.png%3Ff%3Djpg%26w%3D400&w=3840&q=75",
+ ]

  16 |           await page.goto(auditedPage.route, { waitUntil: 'networkidle' });
  17 |           const failures = await collectImageFailures(page);
> 18 |           expect(failures, `Broken images found on ${auditedPage.route}:\n${failures.join('\n')}`).toEqual([]);
     |                                                                                                    ^
  19 |         },
  20 |       );
  21 |     }
    at /Users/guilhermeklein/Documents/GitHub/mirion/mirion-radiopharma-testing/tests/regression/content/image-integrity.spec.ts:18:100
```

### Broken image integrity on /hospitals-clinical-sites (1)
- Signature: `assertion`
- Spec file: `regression/content/image-integrity.spec.ts`
- URL: `/hospitals-clinical-sites`

```text
Error: Broken images found on /hospitals-clinical-sites:
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2F6380492b545dc78c2f61f2026d7ddad6e2c4f9cd-2000x1333.jpg%3Fq%3D100&w=3840&q=75
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2F14f9ed3e9a5a5b7f732dda0f36405fb9c6e6f3f8-1800x1200.jpg&w=3840&q=75
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2F063ff73cb0c63ccefc2189d102da2c47e7b8b12d-2000x1125.jpg&w=3840&q=75
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2F8353850d-f34a-40b5-a14c-85fdefc34c8b%2FbzZw2GqSpb4khF714pebpuWEJ%2FkAcH7KSS6DNSmkjWHPdn184od.png%3Ff%3Djpg%26w%3D400&w=3840&q=75
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2F3f1d672e-30a2-4f85-bcc7-322d69a700d4%2FSbK5cD62UCDwCZ1TFO6DBGwx2%2FmbkX6HO5iab8IVWzGOxHFY2FT.png%3Ff%3Djpg%26w%3D400&w=3840&q=75
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2Fc3702987-742a-43b3-a6a2-60e84faceb2c%2FntJmsKz6kuqHskOI8qRTnAAk1%2FMEadGsrKc8Rgil2i4WzjBCgI7.png%3Ff%3Djpg%26w%3D400&w=3840&q=75
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2Fbd073bf1-c4a5-46f5-8296-54523c4cd5ae%2FLVoOAmaMexK3UHGoiTNJpQ6Yp%2FAyjiuOgyI6XT2gTRrtOZ7VBBb.png%3Ff%3Djpg%26w%3D400&w=3840&q=75

expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 9

- Array []
+ Array [
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2F6380492b545dc78c2f61f2026d7ddad6e2c4f9cd-2000x1333.jpg%3Fq%3D100&w=3840&q=75",
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2F14f9ed3e9a5a5b7f732dda0f36405fb9c6e6f3f8-1800x1200.jpg&w=3840&q=75",
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2F063ff73cb0c63ccefc2189d102da2c47e7b8b12d-2000x1125.jpg&w=3840&q=75",
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2F8353850d-f34a-40b5-a14c-85fdefc34c8b%2FbzZw2GqSpb4khF714pebpuWEJ%2FkAcH7KSS6DNSmkjWHPdn184od.png%3Ff%3Djpg%26w%3D400&w=3840&q=75",
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2F3f1d672e-30a2-4f85-bcc7-322d69a700d4%2FSbK5cD62UCDwCZ1TFO6DBGwx2%2FmbkX6HO5iab8IVWzGOxHFY2FT.png%3Ff%3Djpg%26w%3D400&w=3840&q=75",
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2Fc3702987-742a-43b3-a6a2-60e84faceb2c%2FntJmsKz6kuqHskOI8qRTnAAk1%2FMEadGsrKc8Rgil2i4WzjBCgI7.png%3Ff%3Djpg%26w%3D400&w=3840&q=75",
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2Fbd073bf1-c4a5-46f5-8296-54523c4cd5ae%2FLVoOAmaMexK3UHGoiTNJpQ6Yp%2FAyjiuOgyI6XT2gTRrtOZ7VBBb.png%3Ff%3Djpg%26w%3D400&w=3840&q=75",
+ ]

  16 |           await page.goto(auditedPage.route, { waitUntil: 'networkidle' });
  17 |           const failures = await collectImageFailures(page);
> 18 |           expect(failures, `Broken images found on ${auditedPage.route}:\n${failures.join('\n')}`).toEqual([]);
     |                                                                                                    ^
  19 |         },
  20 |       );
  21 |     }
    at /Users/guilhermeklein/Documents/GitHub/mirion/mirion-radiopharma-testing/tests/regression/content/image-integrity.spec.ts:18:100
```

### Broken image integrity on /isotope-producers-radiopharmacies (1)
- Signature: `assertion`
- Spec file: `regression/content/image-integrity.spec.ts`
- URL: `/isotope-producers-radiopharmacies`

```text
Error: Broken images found on /isotope-producers-radiopharmacies:
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2F708a88cd-5e9c-4ecb-9836-01730a123686%2FI5bVBO41Kl3gDe8Wjf79EuZnf%2FgAno6anRdHZqfcJs3J6rJE6AY.png%3Ff%3Djpg%26w%3D400&w=3840&q=75
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2F2ec43a65-e07b-4986-af0d-4fe4d607dc21%2F2qjUTE5KVKfwcBJ2ZaaPmgwOt%2FFCVupztT0Cbxv3JiD5mWTXI5D.png%3Ff%3Djpg%26w%3D400&w=3840&q=75
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2F346ad031dc553e22190e92f3e40856fc03f992aa-2000x1121.jpg%3Fq%3D100&w=3840&q=75
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2F063ff73cb0c63ccefc2189d102da2c47e7b8b12d-2000x1125.jpg&w=3840&q=75
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2F708a88cd-5e9c-4ecb-9836-01730a123686%2FI5bVBO41Kl3gDe8Wjf79EuZnf%2FgAno6anRdHZqfcJs3J6rJE6AY.png%3Ff%3Djpg%26w%3D400&w=3840&q=75
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2Fc3702987-742a-43b3-a6a2-60e84faceb2c%2FntJmsKz6kuqHskOI8qRTnAAk1%2FMEadGsrKc8Rgil2i4WzjBCgI7.png%3Ff%3Djpg%26w%3D400&w=3840&q=75
https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2F2ec43a65-e07b-4986-af0d-4fe4d607dc21%2F2qjUTE5KVKfwcBJ2ZaaPmgwOt%2FFCVupztT0Cbxv3JiD5mWTXI5D.png%3Ff%3Djpg%26w%3D400&w=3840&q=75

expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 9

- Array []
+ Array [
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2F708a88cd-5e9c-4ecb-9836-01730a123686%2FI5bVBO41Kl3gDe8Wjf79EuZnf%2FgAno6anRdHZqfcJs3J6rJE6AY.png%3Ff%3Djpg%26w%3D400&w=3840&q=75",
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2F2ec43a65-e07b-4986-af0d-4fe4d607dc21%2F2qjUTE5KVKfwcBJ2ZaaPmgwOt%2FFCVupztT0Cbxv3JiD5mWTXI5D.png%3Ff%3Djpg%26w%3D400&w=3840&q=75",
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2F346ad031dc553e22190e92f3e40856fc03f992aa-2000x1121.jpg%3Fq%3D100&w=3840&q=75",
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fodhwz33i%2Fproduction%2F063ff73cb0c63ccefc2189d102da2c47e7b8b12d-2000x1125.jpg&w=3840&q=75",
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2F708a88cd-5e9c-4ecb-9836-01730a123686%2FI5bVBO41Kl3gDe8Wjf79EuZnf%2FgAno6anRdHZqfcJs3J6rJE6AY.png%3Ff%3Djpg%26w%3D400&w=3840&q=75",
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2Fc3702987-742a-43b3-a6a2-60e84faceb2c%2FntJmsKz6kuqHskOI8qRTnAAk1%2FMEadGsrKc8Rgil2i4WzjBCgI7.png%3Ff%3Djpg%26w%3D400&w=3840&q=75",
+   "https://stg.radiopharma.miriontest.net/_next/image?url=https%3A%2F%2Fmedia.test.bluestonepim.com%2F9ca1b743-eb82-4987-9cd6-ec19e02330fa%2F2ec43a65-e07b-4986-af0d-4fe4d607dc21%2F2qjUTE5KVKfwcBJ2ZaaPmgwOt%2FFCVupztT0Cbxv3JiD5mWTXI5D.png%3Ff%3Djpg%26w%3D400&w=3840&q=75",
+ ]

  16 |           await page.goto(auditedPage.route, { waitUntil: 'networkidle' });
  17 |           const failures = await collectImageFailures(page);
> 18 |           expect(failures, `Broken images found on ${auditedPage.route}:\n${failures.join('\n')}`).toEqual([]);
     |                                                                                                    ^
  19 |         },
  20 |       );
  21 |     }
    at /Users/guilhermeklein/Documents/GitHub/mirion/mirion-radiopharma-testing/tests/regression/content/image-integrity.spec.ts:18:100
```

### External link expectation mismatch (1)
- Signature: `assertion`
- Spec file: `regression/links/external-link-integrity.spec.ts`

```text
Error: Unexpected status for https://www.linkedin.com/company/mirion-medical: 999

expect(received).toContain(expected) // indexOf

Expected value: 999
Received array: [200]

  39 |           expectation.allowedStatuses,
  40 |           `Unexpected status for ${expectation.url}: ${response.status()}`,
> 41 |         ).toContain(response.status());
     |           ^
  42 |       }
  43 |     },
  44 |   );
    at /Users/guilhermeklein/Documents/GitHub/mirion/mirion-radiopharma-testing/tests/regression/links/external-link-integrity.spec.ts:41:11
```

### Header submenu target lookup fails after button click on /contact-us (1)
- Signature: `other`
- Spec file: `regression/navigation/header-navigation.spec.ts`
- URL: `/contact-us`

```text
Error: Header button "Solutions" opened, but no submenu target matched route "/solutions".

   at ../src/pages/site-layout.page.ts:47

  45 |     }
  46 |
> 47 |     throw new Error(
     |           ^
  48 |       `Header button "${label}" opened, but no submenu target matched route "${fallbackRoute}".`,
  49 |     );
  50 |   }
    at SiteLayoutPage.clickHeaderNav (/Users/guilhermeklein/Documents/GitHub/mirion/mirion-radiopharma-testing/src/pages/site-layout.page.ts:47:11)
    at SiteLayoutPage.clickHeaderLink (/Users/guilhermeklein/Documents/GitHub/mirion/mirion-radiopharma-testing/src/pages/site-layout.page.ts:23:5)
    at /Users/guilhermeklein/Documents/GitHub/mirion/mirion-radiopharma-testing/tests/regression/navigation/header-navigation.spec.ts:23:11
```

## Recommended Order of Attack

1. Validate Phase D.1 result (footer a11y strict-mode pattern should drop to zero).
2. Stabilize header submenu lookup timing for `/contact-us` in `SiteLayoutPage.clickHeaderNav` (single residual framework-pattern).
3. Triage app-level quality regressions: console errors, missing canonical tags, broken images.
4. Revisit external link expectation data for stale assumptions (spec contract update).