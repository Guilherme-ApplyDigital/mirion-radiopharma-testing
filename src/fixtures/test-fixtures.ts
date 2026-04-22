import fs from 'node:fs';
import { test as base } from '@playwright/test';
import { HealthClient } from '../api/health.client';
import { credentialsFromEnv, UserCredentials } from '../data/test-data';
import { LoginPage } from '../pages/login.page';

type CustomFixtures = {
  _failureArtifacts: void;
  loginPage: LoginPage;
  healthClient: HealthClient;
  credentials: UserCredentials;
};

export const test = base.extend<CustomFixtures>({
  _failureArtifacts: [
    async ({ page }, use, testInfo) => {
      await use();

      if (testInfo.status === testInfo.expectedStatus) {
        return;
      }

      const hasScreenshot = testInfo.attachments.some((attachment) => attachment.contentType === 'image/png');
      if (!hasScreenshot) {
        await testInfo.attach('failure-screenshot', {
          body: await page.screenshot({ fullPage: true }),
          contentType: 'image/png',
        });
      }

      for (const attachment of testInfo.attachments) {
        if (!attachment.path || !fs.existsSync(attachment.path)) {
          continue;
        }
        if (attachment.name.startsWith('captured-')) {
          continue;
        }

        const isFailureArtifact =
          attachment.contentType?.includes('image/') ||
          attachment.contentType?.includes('video/') ||
          attachment.name.toLowerCase().includes('trace');

        if (!isFailureArtifact) {
          continue;
        }

        await testInfo.attach(`captured-${attachment.name}`, {
          path: attachment.path,
          contentType: attachment.contentType ?? 'application/octet-stream',
        });
      }
    },
    { auto: true },
  ],

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  healthClient: async ({ request }, use) => {
    const healthClient = new HealthClient(request);
    await use(healthClient);
  },

  credentials: async ({}, use) => {
    await use(credentialsFromEnv());
  },
});

export { expect } from '@playwright/test';
