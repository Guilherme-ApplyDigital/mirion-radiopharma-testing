import { expect, Page, TestInfo } from '@playwright/test';
import { AuditedPage } from '../../../src/data/routes';
import { assertNoPageErrors, startTracker } from './telemetry';

export async function verifyAuditedPageContract(
  page: Page,
  baseURL: string,
  auditedPage: AuditedPage,
  testInfo: TestInfo,
): Promise<void> {
  const tracker = startTracker(page, baseURL);

  try {
    const response = await page.goto(auditedPage.route, { waitUntil: 'networkidle' });
    expect(response, `No navigation response for ${auditedPage.route}`).not.toBeNull();
    expect(response?.status(), `Unexpected status for ${auditedPage.route}`).toBeLessThan(400);

    await expect(page).toHaveTitle(auditedPage.titlePattern);
    await expect(page.getByRole('heading', { level: 1, name: auditedPage.heading })).toBeVisible();

    const screenshotPath = testInfo.outputPath(`${auditedPage.key}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    await testInfo.attach(`baseline-${auditedPage.key}`, { path: screenshotPath, contentType: 'image/png' });

    const filteredConsoleNoise = await assertNoPageErrors(tracker, baseURL);
    if (filteredConsoleNoise.length > 0) {
      await testInfo.attach('filtered-console-noise.txt', {
        body: Buffer.from(filteredConsoleNoise.join('\n')),
        contentType: 'text/plain',
      });
    }
  } finally {
    tracker.stop();
  }
}
