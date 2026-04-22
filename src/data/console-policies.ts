// Central policy for browser/runtime console noise that should not fail page-contract tests.
// Keep this list explicit and auditable; add patterns only with clear rationale.
export const KNOWN_CONSOLE_NOISE: RegExp[] = [
  // Chromium/WebGL runtime warning emitted by GPU pipeline under headless rendering.
  /ReadPixels/i,
  // Feature-policy warning for unsupported token in third-party/embedded markup.
  /Unrecognized feature:\s*'web-share'/i,
];
