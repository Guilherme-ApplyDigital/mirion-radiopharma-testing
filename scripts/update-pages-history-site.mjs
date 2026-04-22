import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const pagesSiteDir = path.resolve(rootDir, process.env.PAGES_SITE_DIR || '.pages-site');
const sourceReportDir = path.resolve(rootDir, process.env.SOURCE_REPORT_DIR || 'allure-report');
const maxDashboardRuns = Number.parseInt(process.env.MAX_DASHBOARD_RUNS || '30', 10) || 30;

const envName = (process.env.MIRION_ENV || process.env.BV_ENV || 'stg').trim();
const runId = process.env.GITHUB_RUN_ID || 'local';
const runNumber = process.env.GITHUB_RUN_NUMBER || 'local';
const sha = (process.env.GITHUB_SHA || 'local').slice(0, 7);
const repository = process.env.GITHUB_REPOSITORY || 'local/repository';
const serverUrl = process.env.GITHUB_SERVER_URL || 'https://github.com';
const runUrl = `${serverUrl}/${repository}/actions/runs/${runId}`;
const dashboardBaseUrl = String(process.env.DASHBOARD_BASE_URL || '').trim().replace(/\/+$/, '');

function buildPublicUrl(relativePath) {
  if (!dashboardBaseUrl) {
    return relativePath;
  }
  return `${dashboardBaseUrl}/${String(relativePath).replace(/^\/+/, '')}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function parseInlineMarkdown(line) {
  return line
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function markdownToHtml(markdown) {
  const lines = markdown.split(/\r?\n/);
  const chunks = [];
  let listOpen = false;
  let codeOpen = false;

  for (const line of lines) {
    if (line.startsWith('```')) {
      if (!codeOpen) {
        chunks.push('<pre><code>');
        codeOpen = true;
      } else {
        chunks.push('</code></pre>');
        codeOpen = false;
      }
      continue;
    }

    if (codeOpen) {
      chunks.push(escapeHtml(line));
      continue;
    }

    if (line.startsWith('### ')) {
      if (listOpen) {
        chunks.push('</ul>');
        listOpen = false;
      }
      chunks.push(`<h3>${parseInlineMarkdown(escapeHtml(line.slice(4)))}</h3>`);
      continue;
    }

    if (line.startsWith('## ')) {
      if (listOpen) {
        chunks.push('</ul>');
        listOpen = false;
      }
      chunks.push(`<h2>${parseInlineMarkdown(escapeHtml(line.slice(3)))}</h2>`);
      continue;
    }

    if (line.startsWith('# ')) {
      if (listOpen) {
        chunks.push('</ul>');
        listOpen = false;
      }
      chunks.push(`<h1>${parseInlineMarkdown(escapeHtml(line.slice(2)))}</h1>`);
      continue;
    }

    if (line.startsWith('- ')) {
      if (!listOpen) {
        chunks.push('<ul>');
        listOpen = true;
      }
      chunks.push(`<li>${parseInlineMarkdown(escapeHtml(line.slice(2)))}</li>`);
      continue;
    }

    if (!line.trim()) {
      if (listOpen) {
        chunks.push('</ul>');
        listOpen = false;
      }
      chunks.push('<br/>');
      continue;
    }

    if (listOpen) {
      chunks.push('</ul>');
      listOpen = false;
    }
    chunks.push(`<p>${parseInlineMarkdown(escapeHtml(line))}</p>`);
  }

  if (listOpen) {
    chunks.push('</ul>');
  }
  if (codeOpen) {
    chunks.push('</code></pre>');
  }

  return chunks.join('\n');
}

function buildAnalysisHtml(markdownHtml, runStamp) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Regression Analysis - ${escapeHtml(envName)} - ${escapeHtml(runStamp)}</title>
    <style>
      body { font-family: Arial, sans-serif; margin: 0; background: #f8fafc; color: #0f172a; }
      .container { max-width: 1000px; margin: 0 auto; padding: 24px; }
      .card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; }
      .meta { color: #475569; font-size: 14px; margin-bottom: 16px; }
      a { color: #2563eb; text-decoration: none; }
      a:hover { text-decoration: underline; }
      code { background: #eef2ff; padding: 2px 6px; border-radius: 4px; }
      pre { background: #0f172a; color: #e2e8f0; padding: 12px; overflow: auto; border-radius: 6px; }
    </style>
  </head>
  <body>
    <div class="container">
      <p><a href="../../../index.html">Back to report history</a></p>
      <div class="card">
        <div class="meta">Environment: ${escapeHtml(envName)} | Run: ${escapeHtml(runStamp)}</div>
        ${markdownHtml}
      </div>
    </div>
  </body>
</html>`;
}

function buildDashboardHtml(historyEntries) {
  const latest = historyEntries[0];
  const cards = [
    { label: 'Total runs', value: String(historyEntries.length) },
    { label: 'Latest env', value: latest?.env || '-' },
    { label: 'Latest run number', value: latest?.runNumber || '-' },
    { label: 'Latest SHA', value: latest?.sha || '-' },
  ];

  const rowsHtml =
    historyEntries.length === 0
      ? '<tr><td colspan="8">No runs yet.</td></tr>'
      : historyEntries
          .map((entry) => {
            const publicReportUrl = buildPublicUrl(entry.reportPath);
            const reportLink = `<a href="${publicReportUrl}" target="_blank" rel="noopener noreferrer">Open report</a>`;
            const analysisUrl = entry.analysisPath ? buildPublicUrl(entry.analysisPath) : '';
            const analysisLink = analysisUrl
              ? `<a href="${analysisUrl}" target="_blank" rel="noopener noreferrer">Open analysis</a>`
              : '-';
            const runLink = `<a href="${publicReportUrl}" target="_blank" rel="noopener noreferrer">#${entry.runNumber}</a>`;
            const actionsRunLink = `<a href="${entry.runUrl}" target="_blank" rel="noopener noreferrer">Open run</a>`;
            return `<tr>
  <td>${escapeHtml(entry.date)}</td>
  <td>${escapeHtml(entry.env)}</td>
  <td>${runLink}</td>
  <td><code>${escapeHtml(entry.sha)}</code></td>
  <td>${reportLink}</td>
  <td>${analysisLink}</td>
  <td>${actionsRunLink}</td>
  <td><code>${escapeHtml(entry.id)}</code></td>
</tr>`;
          })
          .join('\n');

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mirion Radiopharma - Playwright Dashboard</title>
    <style>
      body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; }
      .container { max-width: 1200px; margin: 0 auto; padding: 24px; }
      .cards { display: grid; grid-template-columns: repeat(4, minmax(180px, 1fr)); gap: 12px; margin: 20px 0; }
      .card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; }
      .card .label { font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; }
      .card .value { margin-top: 6px; font-size: 20px; font-weight: 700; }
      table { width: 100%; border-collapse: collapse; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
      thead th { background: #0f172a; color: #f8fafc; text-align: left; font-size: 13px; padding: 10px; }
      tbody td { border-top: 1px solid #e2e8f0; padding: 10px; font-size: 14px; vertical-align: top; }
      code { background: #eef2ff; padding: 2px 6px; border-radius: 4px; font-size: 12px; }
      a { color: #2563eb; text-decoration: none; }
      a:hover { text-decoration: underline; }
      @media (max-width: 900px) { .cards { grid-template-columns: repeat(2, minmax(140px, 1fr)); } }
      @media (max-width: 640px) { .cards { grid-template-columns: 1fr; } }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Mirion Radiopharma - Playwright Dashboard</h1>
      <p>Nightly run history with links to Allure reports and optional regression analysis.</p>
      <div class="cards">
        ${cards
          .map(
            (card) => `<div class="card"><div class="label">${escapeHtml(card.label)}</div><div class="value">${escapeHtml(card.value)}</div></div>`,
          )
          .join('\n')}
      </div>
      <table>
        <thead>
          <tr>
            <th>Date (UTC)</th>
            <th>Environment</th>
            <th>Run</th>
            <th>Commit</th>
            <th>Allure report</th>
            <th>Analysis</th>
            <th>Actions run</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  </body>
</html>`;
}

function ensureDirectory(targetPath) {
  mkdirSync(targetPath, { recursive: true });
}

function loadHistory(historyFilePath) {
  if (!existsSync(historyFilePath)) {
    return [];
  }

  try {
    const payload = JSON.parse(readFileSync(historyFilePath, 'utf8'));
    return Array.isArray(payload) ? payload : [];
  } catch {
    return [];
  }
}

function parseRunStampFromReportPath(reportPathValue) {
  const normalized = String(reportPathValue || '').replace(/\\/g, '/');
  const pieces = normalized.split('/');
  if (pieces.length < 4) {
    return normalized || 'unknown';
  }
  return pieces[2];
}

function pruneOldRuns(historyEntries) {
  if (historyEntries.length <= maxDashboardRuns) {
    return historyEntries;
  }

  const kept = historyEntries.slice(0, maxDashboardRuns);
  const removed = historyEntries.slice(maxDashboardRuns);

  for (const entry of removed) {
    if (!entry?.reportPath) {
      continue;
    }
    const reportDirRelative = entry.reportPath.replace(/\/index\.html$/i, '');
    const reportDirAbsolute = path.join(pagesSiteDir, reportDirRelative);
    rmSync(reportDirAbsolute, { recursive: true, force: true });
  }

  const stamps = removed.map((entry) => parseRunStampFromReportPath(entry.reportPath));
  console.log(`Pruned ${removed.length} old runs: ${stamps.join(', ')}`);
  return kept;
}

function pickLatestRegressionAnalysis() {
  const reportsDir = path.join(rootDir, 'reports');
  if (!existsSync(reportsDir)) {
    return null;
  }

  const candidates = readdirSync(reportsDir)
    .filter((filename) => /^REGRESSION_ANALYSIS_.*\.md$/i.test(filename))
    .sort((a, b) => a.localeCompare(b));

  if (candidates.length === 0) {
    return null;
  }

  return path.join(reportsDir, candidates[candidates.length - 1]);
}

function run() {
  if (!existsSync(sourceReportDir) || !statSync(sourceReportDir).isDirectory()) {
    throw new Error(`SOURCE_REPORT_DIR does not exist or is not a directory: ${sourceReportDir}`);
  }

  ensureDirectory(pagesSiteDir);
  ensureDirectory(path.join(pagesSiteDir, 'reports'));

  const runStamp = `${new Date().toISOString().replace(/[.:]/g, '-')}-run-${runNumber}`;
  const runReportRelativeDir = path.posix.join('reports', envName, runStamp);
  const runReportAbsoluteDir = path.join(pagesSiteDir, runReportRelativeDir);
  ensureDirectory(runReportAbsoluteDir);
  cpSync(sourceReportDir, runReportAbsoluteDir, { recursive: true, force: true });

  let analysisPath;
  const latestAnalysis = pickLatestRegressionAnalysis();
  if (latestAnalysis) {
    const markdownContent = readFileSync(latestAnalysis, 'utf8');
    const targetMarkdownPath = path.join(runReportAbsoluteDir, 'REGRESSION_ANALYSIS.md');
    const targetHtmlPath = path.join(runReportAbsoluteDir, 'REGRESSION_ANALYSIS.html');
    writeFileSync(targetMarkdownPath, markdownContent, 'utf8');
    writeFileSync(targetHtmlPath, buildAnalysisHtml(markdownToHtml(markdownContent), runStamp), 'utf8');
    analysisPath = path.posix.join(runReportRelativeDir, 'REGRESSION_ANALYSIS.html');
  }

  const historyFilePath = path.join(pagesSiteDir, 'reports', 'history.json');
  const existing = loadHistory(historyFilePath);
  const nextEntry = {
    id: `${runId}-${envName}`,
    date: new Date().toISOString(),
    env: envName,
    runNumber: String(runNumber),
    runId: String(runId),
    sha,
    reportPath: path.posix.join(runReportRelativeDir, 'index.html'),
    analysisPath,
    runUrl,
  };

  const deduped = existing.filter((entry) => entry?.id !== nextEntry.id);
  const ordered = [nextEntry, ...deduped];
  const retained = pruneOldRuns(ordered);

  writeFileSync(historyFilePath, `${JSON.stringify(retained, null, 2)}\n`, 'utf8');
  writeFileSync(path.join(pagesSiteDir, 'index.html'), buildDashboardHtml(retained), 'utf8');
}

run();
