// @ts-check
/**
 * Karma configuration for the ih-hand-sanitation-www Angular project.
 *
 * Runner : Karma v6 + karma-jasmine
 * Browser: ChromeHeadless (swap to Chrome for interactive debug)
 * Coverage: istanbul via karma-coverage
 *
 * Docs: https://karma-runner.github.io/6.4/config/configuration-file.html
 */

/** @param {import('karma').Config} config */
module.exports = function (config) {
  config.set({
    // Base path used to resolve all relative file patterns.
    basePath: '',

    // Use Jasmine as the test framework.
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    // Reporters active during a run.
    reporters: ['progress', 'kjhtml', 'coverage'],

    // -------------------------------------------------------------------------
    // Coverage reporter
    // -------------------------------------------------------------------------
    coverageReporter: {
      /** Output directory relative to basePath. */
      dir: 'coverage',
      reporters: [
        { type: 'html',  subdir: 'html'  },  // browse coverage/html/index.html
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' }, // for CI tools
        { type: 'text-summary' },             // printed to console after run
      ],
    },

    // -------------------------------------------------------------------------
    // Browsers
    // -------------------------------------------------------------------------
    /**
     * 'ChromeHeadless' - suitable for CI (no display server needed).
     * Override at the command line for local interactive debugging:
     *   ng test --browsers=Chrome
     */
    browsers: ['Chrome'],

    customLaunchers: {
      /** Headless Chrome configuration used in CI pipelines. */
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu'],
      },
    },

    // -------------------------------------------------------------------------
    // Run behaviour
    // -------------------------------------------------------------------------
    /** Single run in CI; set to true for 'ng test --watch'. */
    singleRun: false,

    /** Restart on source change when not in single-run mode. */
    autoWatch: true,

    /**
     * Increase timeout for slow machines or heavy test suites.
     * Default is 10 000 ms.
     */
    browserNoActivityTimeout: 30000,

    // -------------------------------------------------------------------------
    // Misc
    // -------------------------------------------------------------------------
    logLevel: config.LOG_INFO,
  });
};
