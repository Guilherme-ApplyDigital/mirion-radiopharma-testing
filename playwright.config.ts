import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const runLoginE2E = process.env.RUN_LOGIN_E2E === 'true';
const loginSpecIgnore = runLoginE2E ? [] : ['**/e2e/login.e2e.spec.ts'];

const allProjects = [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
    testIgnore: [
      '**/regression/pages/mobile-rendering.spec.ts',
      ...loginSpecIgnore,
    ],
  },
  {
    name: 'mobile-chrome',
    use: { ...devices['Pixel 5'] },
    testIgnore: loginSpecIgnore,
  },
];

const ciProjects = process.env.CI_PROJECTS
  ?.split(',')
  .map((project) => project.trim())
  .filter(Boolean);
const projects = ciProjects?.length
  ? allProjects.filter((project) => ciProjects.includes(project.name))
  : allProjects;
const ciRetries = Number.parseInt(process.env.CI_RETRIES || '0', 10);

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? (Number.isNaN(ciRetries) ? 0 : ciRetries) : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['allure-playwright'],
  ],
  use: {
    baseURL:
      process.env.MIRION_BASE_URL ||
      process.env.BV_BASE_URL ||
      process.env.BASE_URL ||
      'https://stg.radiopharma.miriontest.net/',
    navigationTimeout: 30_000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  projects,
});
