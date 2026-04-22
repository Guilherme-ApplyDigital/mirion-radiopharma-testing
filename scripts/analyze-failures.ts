import fs from 'node:fs';
import path from 'node:path';

type FailureCategory = 'assertion' | 'timeout' | 'network' | 'selector-not-found' | 'unknown';

type FailureRecord = {
  name: string;
  suite: string;
  category: FailureCategory;
  message: string;
  flaky: boolean;
};

type AllureResult = {
  fullName?: string;
  name?: string;
  status?: string;
  statusDetails?: {
    message?: string;
    trace?: string;
  };
  labels?: Array<{ name?: string; value?: string }>;
  retries?: Array<{ status?: string }>;
};

const RESULTS_DIR = path.resolve(process.cwd(), 'allure-results');

function getCategory(message: string): FailureCategory {
  const normalized = message.toLowerCase();

  if (normalized.includes('expect(') || normalized.includes('assert')) {
    return 'assertion';
  }
  if (normalized.includes('timeout') || normalized.includes('timed out')) {
    return 'timeout';
  }
  if (normalized.includes('net::') || normalized.includes('network') || normalized.includes('econn')) {
    return 'network';
  }
  if (normalized.includes('locator') || normalized.includes('selector') || normalized.includes('not found')) {
    return 'selector-not-found';
  }
  return 'unknown';
}

function listAllureResultFiles(resultsDir: string): string[] {
  if (!fs.existsSync(resultsDir)) {
    return [];
  }

  return fs
    .readdirSync(resultsDir)
    .filter((file) => file.endsWith('-result.json'))
    .map((file) => path.join(resultsDir, file));
}

function safeReadJson(filePath: string): AllureResult | null {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8')) as AllureResult;
  } catch {
    return null;
  }
}

function getSuite(labels: AllureResult['labels']): string {
  if (!labels) {
    return 'Unclassified';
  }
  const suite = labels.find((label) => label.name === 'suite')?.value;
  const feature = labels.find((label) => label.name === 'feature')?.value;
  return suite || feature || 'Unclassified';
}

function summarize(records: FailureRecord[], totalTests: number, flakyCount: number): string {
  const failCount = records.length;
  const passCount = Math.max(totalTests - failCount, 0);

  const grouped = new Map<string, number>();
  for (const record of records) {
    grouped.set(record.suite, (grouped.get(record.suite) ?? 0) + 1);
  }

  const topSuites = [...grouped.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);

  const lines: string[] = [];
  lines.push('## E2E Failure Analysis');
  lines.push('');
  lines.push(`- Passed: **${passCount}**`);
  lines.push(`- Failed: **${failCount}**`);
  lines.push(`- Flaky (failed then passed on retry): **${flakyCount}**`);
  lines.push('');
  lines.push('### Top failing suites');

  if (topSuites.length === 0) {
    lines.push('- No failing suites.');
  } else {
    for (const [suite, count] of topSuites) {
      lines.push(`- ${suite}: ${count}`);
    }
  }

  lines.push('');
  lines.push('### Failure details');

  if (records.length === 0) {
    lines.push('- No failures detected.');
  } else {
    for (const record of records) {
      const excerpt = record.message.replace(/\s+/g, ' ').slice(0, 220);
      lines.push(
        `- **${record.name}** | category: \`${record.category}\` | suite: ${record.suite} | flaky: ${
          record.flaky ? 'yes' : 'no'
        }`,
      );
      lines.push(`  - ${excerpt || 'No error message available.'}`);
      lines.push('  - Allure report: `allure-report/index.html`');
    }
  }

  lines.push('');
  return lines.join('\n');
}

function run(): number {
  const files = listAllureResultFiles(RESULTS_DIR);

  if (files.length === 0) {
    const noData = '## E2E Failure Analysis\n\nNo Allure result files found in `allure-results/`.\n';
    if (process.env.GITHUB_STEP_SUMMARY) {
      fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${noData}\n`);
    }
    console.log(noData);
    return 0;
  }

  const parsed = files.map(safeReadJson).filter((result): result is AllureResult => result !== null);

  const failed = parsed.filter((result) => result.status === 'failed' || result.status === 'broken');
  const records: FailureRecord[] = failed.map((result) => {
    const message = result.statusDetails?.message || result.statusDetails?.trace || 'No error details captured';
    const retries = result.retries ?? [];
    const flaky = retries.some((retry) => retry.status === 'passed');

    return {
      name: result.fullName || result.name || 'Unnamed test',
      suite: getSuite(result.labels),
      category: getCategory(message),
      message,
      flaky,
    };
  });

  const flakyCount = records.filter((record) => record.flaky).length;
  const summary = summarize(records, parsed.length, flakyCount);

  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${summary}\n`);
  }

  console.log(summary);
  return records.length > 0 ? 1 : 0;
}

process.exit(run());
