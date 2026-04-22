# Console Errors Classified (Focused MCP Pass)

Scope: 5 affected pages from page-contract failures, each loaded with a **fresh browser context** 3 times (`playwright_close` before each run), Chromium `1280x720`.

## Classification Rules Used

- `first-party`: message originates from `stg.radiopharma.miriontest.net` or app bundle under same host.
- `third-party`: message originates from external vendors (analytics, embeds, widgets, ads, etc.).
- `browser-noise`: browser/runtime warning without actionable app defect signal (GPU, deprecation, feature-policy noise).

## Per-Page Runs

| Page | Run | Console output (full captured text) | Source URL in message | Classification |
|---|---:|---|---|---|
| `/` | 1 | `[warning] [.WebGL-0x11c001b8600]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels`<br>`[warning] [.WebGL-0x11c001baa00]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels` | N/A (driver/runtime warning) | `browser-noise` |
| `/` | 2 | `[warning] [.WebGL-0x10c001b5000]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels` (x2) | N/A | `browser-noise` |
| `/` | 3 | `[warning] [.WebGL-0x10c001b9e00]GL Driver Message ... ReadPixels`<br>`[warning] [.WebGL-0x10c001bb000]GL Driver Message ... ReadPixels` | N/A | `browser-noise` |
| `/about-us` | 1 | `[warning] Unrecognized feature: 'web-share'.`<br>`[warning] [.WebGL-0x11400429800]GL Driver Message ... ReadPixels`<br>`[warning] [.WebGL-0x1140042aa00]GL Driver Message ... ReadPixels` | N/A | `browser-noise` |
| `/about-us` | 2 | `[warning] Unrecognized feature: 'web-share'.`<br>`[warning] [.WebGL-0x104001b8600]GL Driver Message ... ReadPixels`<br>`[warning] [.WebGL-0x104001be600]GL Driver Message ... ReadPixels` | N/A | `browser-noise` |
| `/about-us` | 3 | `[warning] Unrecognized feature: 'web-share'.`<br>`[warning] [.WebGL-0x114001b5c00]GL Driver Message ... ReadPixels` (x2) | N/A | `browser-noise` |
| `/contact-us` | 1 | `[warning] [.WebGL-0x104001b3200]GL Driver Message ... ReadPixels`<br>`[warning] [.WebGL-0x104001bb000]GL Driver Message ... ReadPixels` | N/A | `browser-noise` |
| `/contact-us` | 2 | `[warning] [.WebGL-0x11c001b8000]GL Driver Message ... ReadPixels`<br>`[warning] [.WebGL-0x11c001bb600]GL Driver Message ... ReadPixels` | N/A | `browser-noise` |
| `/contact-us` | 3 | `[warning] [.WebGL-0x10c001b3200]GL Driver Message ... ReadPixels`<br>`[warning] [.WebGL-0x10c001bce00]GL Driver Message ... ReadPixels` | N/A | `browser-noise` |
| `/hospitals-clinical-sites` | 1 | `[warning] [.WebGL-0x11c001b5600]GL Driver Message ... ReadPixels`<br>`[warning] [.WebGL-0x11c001b6800]GL Driver Message ... ReadPixels` | N/A | `browser-noise` |
| `/hospitals-clinical-sites` | 2 | `[warning] [.WebGL-0x10c001b8600]GL Driver Message ... ReadPixels`<br>`[warning] [.WebGL-0x10c001ba400]GL Driver Message ... ReadPixels` | N/A | `browser-noise` |
| `/hospitals-clinical-sites` | 3 | `[warning] [.WebGL-0x10c001b4400]GL Driver Message ... ReadPixels`<br>`[warning] [.WebGL-0x10c001b7a00]GL Driver Message ... ReadPixels` | N/A | `browser-noise` |
| `/isotope-producers-radiopharmacies` | 1 | `[warning] [.WebGL-0x13c001b4400]GL Driver Message ... ReadPixels`<br>`[warning] [.WebGL-0x13c001b7a00]GL Driver Message ... ReadPixels` | N/A | `browser-noise` |
| `/isotope-producers-radiopharmacies` | 2 | `[warning] [.WebGL-0x13c001b9e00]GL Driver Message ... ReadPixels`<br>`[warning] [.WebGL-0x13c001ba400]GL Driver Message ... ReadPixels` | N/A | `browser-noise` |
| `/isotope-producers-radiopharmacies` | 3 | `[warning] [.WebGL-0x104001baa00]GL Driver Message ... ReadPixels`<br>`[warning] [.WebGL-0x104001bbc00]GL Driver Message ... ReadPixels` | N/A | `browser-noise` |

## Aggregate Classification

- `first-party`: **0**
- `third-party`: **0**
- `browser-noise`: **15 runs**

## Recommendation

Recommended path: **Path A**

Reason:
- In this focused pass, none of the repeated loads produced deterministic first-party errors.
- Observed messages are browser/runtime warnings (GPU + feature-policy), not app logic exceptions.

### Proposed filter logic (for approval, not applied)

In `startTracker()` console handler:

```ts
const isFirstParty = (text: string): boolean => {
  const normalized = text.toLowerCase();
  return normalized.includes('stg.radiopharma.miriontest.net')
    || normalized.includes('/_next/static/')
    || normalized.includes('mirion-radiopharma');
};

const isErrorLevel = (type: string) => type === 'error' || type === 'exception';

const isNoise = (text: string): boolean => {
  const normalized = text.toLowerCase();
  return normalized.includes('webgl')
    || normalized.includes('gpu stall due to readpixels')
    || normalized.includes(\"unrecognized feature: 'web-share'\");
};

if (isErrorLevel(msg.type()) && isFirstParty(msg.text()) && !isNoise(msg.text())) {
  consoleErrors.push(msg.text());
}
```

This keeps the contract strict for real first-party runtime errors while ignoring repeatable browser-noise warnings.
