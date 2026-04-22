import https from 'node:https';

const webhookUrl = process.env.NOTIFY_WEBHOOK_URL;
const message = process.env.NOTIFY_MESSAGE || 'Playwright nightly completed.';

if (!webhookUrl) {
  console.log('NOTIFY_WEBHOOK_URL not set. Skipping notification.');
  process.exit(0);
}

const payload = JSON.stringify({ text: message });
const url = new URL(webhookUrl);

const request = https.request(
  {
    protocol: url.protocol,
    hostname: url.hostname,
    port: url.port,
    path: `${url.pathname}${url.search}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload),
    },
  },
  (response) => {
    if (response.statusCode && response.statusCode >= 400) {
      console.error(`Notification failed with status ${response.statusCode}`);
      process.exitCode = 1;
      return;
    }
    console.log('Notification sent successfully.');
  },
);

request.on('error', (error) => {
  console.error(`Notification request failed: ${error.message}`);
  process.exitCode = 1;
});

request.write(payload);
request.end();
