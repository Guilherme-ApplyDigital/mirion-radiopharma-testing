import { expect, Page, Request, Response } from '@playwright/test';

export type Tracker = {
  consoleErrors: string[];
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
  const consoleErrors: string[] = [];
  const failedRequests: string[] = [];
  const failedResponses: string[] = [];

  const onConsole = (msg: { type: () => string; text: () => string }) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
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

export async function assertNoPageErrors(tracker: Tracker): Promise<void> {
  expect(tracker.consoleErrors, `Console errors found:\n${tracker.consoleErrors.join('\n')}`).toEqual([]);
  expect(
    [...tracker.failedRequests, ...tracker.failedResponses],
    `Network failures found:\n${[...tracker.failedRequests, ...tracker.failedResponses].join('\n')}`,
  ).toEqual([]);
}

export async function collectImageFailures(page: Page): Promise<string[]> {
  return page.evaluate(async () => {
    const images = Array.from(document.images);
    const failures: string[] = [];

    for (const image of images) {
      image.scrollIntoView({ block: 'center', inline: 'center' });

      if (!image.complete) {
        await Promise.race([
          new Promise<void>((resolve) => {
            image.addEventListener('load', () => resolve(), { once: true });
            image.addEventListener('error', () => resolve(), { once: true });
          }),
          new Promise<void>((resolve) => {
            setTimeout(() => resolve(), 3000);
          }),
        ]);
      }

      if (image.complete && image.naturalWidth > 0) {
        continue;
      }

      try {
        await image.decode();
      } catch {
        // decode can reject for broken images and cross-origin images, keep validating via naturalWidth.
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
