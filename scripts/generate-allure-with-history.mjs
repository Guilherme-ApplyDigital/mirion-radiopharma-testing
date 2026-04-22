import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const rootDir = process.cwd();
const allureResultsDir = path.join(rootDir, 'allure-results');
const allureReportDir = path.join(rootDir, 'allure-report');
const allureReportHistoryDir = path.join(allureReportDir, 'history');
const allureResultsHistoryDir = path.join(allureResultsDir, 'history');

function sanitizeEnvName(value) {
  return (value || 'stg').trim();
}

function resolveBaseUrl(envName) {
  const mirionEnvKey = `MIRION_${envName.toUpperCase()}_BASE_URL`;
  const legacyEnvKey = `BV_${envName.toUpperCase()}_BASE_URL`;
  return (
    process.env.MIRION_BASE_URL ||
    process.env.BV_BASE_URL ||
    process.env.BASE_URL ||
    process.env[mirionEnvKey] ||
    process.env[legacyEnvKey] ||
    'not-provided'
  );
}

function buildExecutorPayload() {
  const runNumber = process.env.GITHUB_RUN_NUMBER || 'local';
  const runId = process.env.GITHUB_RUN_ID || 'local';
  const repository = process.env.GITHUB_REPOSITORY || 'local/repository';
  const serverUrl = process.env.GITHUB_SERVER_URL || 'https://github.com';
  const envName = sanitizeEnvName(process.env.MIRION_ENV || process.env.BV_ENV);

  return {
    name: 'GitHub Actions',
    type: 'github',
    buildName: `Nightly ${envName} run #${runNumber}`,
    buildOrder: Number.isFinite(Number(runNumber)) ? Number(runNumber) : 0,
    buildUrl: `${serverUrl}/${repository}/actions/runs/${runId}`,
    reportName: `Allure Report - ${envName.toUpperCase()} #${runNumber}`,
  };
}

function copyHistoryIfPresent() {
  if (!existsSync(allureReportHistoryDir)) {
    return;
  }

  mkdirSync(allureResultsDir, { recursive: true });
  cpSync(allureReportHistoryDir, allureResultsHistoryDir, { recursive: true, force: true });
}

function writeMetadata() {
  const envName = sanitizeEnvName(process.env.MIRION_ENV || process.env.BV_ENV);
  const baseUrl = resolveBaseUrl(envName);
  const now = new Date().toISOString();

  mkdirSync(allureResultsDir, { recursive: true });

  const environmentProperties = [
    `environment=${envName}`,
    `baseUrl=${baseUrl}`,
    `generatedAt=${now}`,
  ].join('\n');
  writeFileSync(path.join(allureResultsDir, 'environment.properties'), `${environmentProperties}\n`, 'utf8');

  writeFileSync(
    path.join(allureResultsDir, 'executor.json'),
    `${JSON.stringify(buildExecutorPayload(), null, 2)}\n`,
    'utf8',
  );
}

function generateAllureReport() {
  execSync('npx allure generate allure-results --clean -o allure-report', {
    stdio: 'inherit',
  });
}

copyHistoryIfPresent();
writeMetadata();
generateAllureReport();
