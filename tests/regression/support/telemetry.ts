import { expect, Page, Request, Response } from '@playwright/test';
import { KNOWN_CONSOLE_NOISE } from '../../../src/data/console-policies';

type ConsoleEntry = {
  type: string;
  text: string;
  sourceUrl: string;
};

export type Tracker = {
  consoleErrors: ConsoleEntry[];
  failedRequests: string[];
  failedResponses: string[];
  stop: () => void;
};

function sameOrigin(url: string, baseURL: string): boolean {
  try {
    return new URL(url).origin === new URL(baseURL).origin;
  } catch {
    return false;
  }
}

export function startTracker(page: Page, baseURL: string): Tracker {
  const consoleErrors: ConsoleEntry[] = [];
  const failedRequests: string[] = [];
  const failedResponses: string[] = [];

  const onConsole = (msg: {
    type: () => string;
    text: () => string;
    location: () => { url?: string };
  }) => {
    if (msg.type() === 'error' || msg.type() === 'exception') {
      const location = msg.location();
      consoleErrors.push({
        type: msg.type(),
        text: msg.text(),
        sourceUrl: location?.url ?? '',
      });
    }
  };

  const onRequestFailed = (request: Request) => {
    if (sameOrigin(request.url(), baseURL)) {
      failedRequests.push(`${request.method()} ${request.url()} :: ${request.failure()?.errorText ?? 'unknown'}`);
    }
  };

  const onResponse = (response: Response) => {
    if (sameOrigin(response.url(), baseURL) && response.status() >= 400) {
      failedResponses.push(`${response.request().method()} ${response.url()} :: ${response.status()}`);
    }
  };

  page.on('console', onConsole);
  page.on('requestfailed', onRequestFailed);
  page.on('response', onResponse);

  return {
    consoleErrors,
    failedRequests,
    failedResponses,
    stop: () => {
      page.off('console', onConsole);
      page.off('requestfailed', onRequestFailed);
      page.off('response', onResponse);
    },
  };
}

export async function assertNoPageErrors(tracker: Tracker, baseURL: string): Promise<string[]> {
  const baseHost = new URL(baseURL).hostname;
  const firstPartyErrors: string[] = [];
  const filteredNoise: string[] = [];

  for (const entry of tracker.consoleErrors) {
    const sourceUrl = entry.sourceUrl.trim();
    const formatted = `[${entry.type}] ${entry.text}${sourceUrl ? ` @ ${sourceUrl}` : ''}`;

    if (!sourceUrl) {
      filteredNoise.push(`[filtered:no-source] ${formatted}`);
      continue;
    }

    let sourceHost = '';
    try {
      sourceHost = new URL(sourceUrl).hostname;
    } catch {
      filteredNoise.push(`[filtered:invalid-source] ${formatted}`);
      continue;
    }

    if (sourceHost !== baseHost) {
      filteredNoise.push(`[filtered:non-first-party:${sourceHost}] ${formatted}`);
      continue;
    }

    if (KNOWN_CONSOLE_NOISE.some((pattern) => pattern.test(entry.text) || pattern.test(sourceUrl))) {
      filteredNoise.push(`[filtered:known-noise] ${formatted}`);
      continue;
    }

    firstPartyErrors.push(formatted);
  }

  expect(firstPartyErrors, `First-party console errors found:\n${firstPartyErrors.join('\n')}`).toEqual([]);
  expect(
    [...tracker.failedRequests, ...tracker.failedResponses],
    `Network failures found:\n${[...tracker.failedRequests, ...tracker.failedResponses].join('\n')}`,
  ).toEqual([]);

  return filteredNoise;
}

export async function collectImageFailures(page: Page): Promise<string[]> {
  return page.evaluate(async () => {
    const images = Array.from(document.images);
    const failures: string[] = [];

    for (const image of images) {
      image.scrollIntoView({ block: 'center', inline: 'center' });
    }

    const pending = images.filter((image) => !image.complete);
    if (pending.length) {
      await Promise.race([
        Promise.all(
          pending.map(
            (image) =>
              new Promise<void>((resolve) => {
                image.addEventListener('load', () => resolve(), { once: true });
                image.addEventListener('error', () => resolve(), { once: true });
              }),
          ),
        ),
        new Promise<void>((resolve) => {
          setTimeout(() => resolve(), 4000);
        }),
      ]);
    }

    for (const image of images) {
      if (!image.complete) {
        continue;
      }

      if (image.naturalWidth <= 0) {
        failures.push(image.currentSrc || image.src || '<missing-src>');
      }
    }

    return [...new Set(failures)];
  });
}

export async function collectMissingInputLabels(page: Page): Promise<string[]> {
  return page.evaluate(() => {
    const controls = Array.from(document.querySelectorAll('input, select, textarea'));

    return controls
      .filter((control) => {
        const id = control.getAttribute('id') ?? '';
        const hasForLabel = id ? !!document.querySelector(`label[for="${CSS.escape(id)}"]`) : false;
        const wrappedLabel = !!control.closest('label');
        const ariaLabel = !!control.getAttribute('aria-label');
        const labelledBy = !!control.getAttribute('aria-labelledby');
        return !(hasForLabel || wrappedLabel || ariaLabel || labelledBy);
      })
      .map((control) => control.getAttribute('id') || control.getAttribute('name') || control.tagName.toLowerCase());
  });
}
