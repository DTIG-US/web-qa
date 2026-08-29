import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright E2E configuration for ih-hand-sanitation-www.
 *
 * Tests run against the Angular dev server (ng serve).
 * Start it with `npm start` before running `npx playwright test`,
 * or use the `webServer` option below to have Playwright start it automatically.
 *
 * Docs: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './e2e',

  /** Maximum time one test can run. */
  timeout: 30_000,

  /** Fail the build on any unexpected failure. */
  forbidOnly: !!process.env['CI'],

  /** Retry once on CI to absorb transient flakiness. */
  retries: process.env['CI'] ? 1 : 0,

  /** Run tests in parallel (safe because all tests are read-only). */
  workers: process.env['CI'] ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],

  use: {
    /** Base URL for all page.goto('/') calls. */
    baseURL: 'http://localhost:4200',

    /** Capture trace on first retry to help debug failures. */
    trace: 'on-first-retry',

    /** Full-page screenshot on failure. */
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 13'] },
    },
  ],

  /**
   * Automatically start `ng serve` before running tests.
   * Remove this block if you prefer to start the dev server manually.
   */
  webServer: {
    command: 'npm start',
    url: 'http://localhost:4200',
    reuseExistingServer: !process.env['CI'],
    timeout: 120_000,
  },
});
