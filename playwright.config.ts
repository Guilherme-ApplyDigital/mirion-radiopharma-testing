import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const allProjects = [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  {
    name: 'mobile-chrome',
    use: { ...devices['Pixel 5'] },
  },
];

const ciProjects = process.env.CI_PROJECTS
  ?.split(',')
  .map((project) => project.trim())
  .filter(Boolean);
const projects = ciProjects?.length
  ? allProjects.filter((project) => ciProjects.includes(project.name))
  : allProjects;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
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
