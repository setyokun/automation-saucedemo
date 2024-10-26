const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const report = require('multiple-cucumber-html-reporter');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      // implement node event listeners here

    // Capture the start time
    on('before:run', () => {
      executionStartTime = new Date();
    });


      on('after:run', (results) => {
        const executionEndTime = new Date(); // Capture the end time

        const duration = Math.round((executionEndTime - executionStartTime) / 1000); // in seconds
        const durationFormatted = `${Math.floor(duration / 60)}m ${duration % 60}s`; // Format as "Xm Ys"

        report.generate({
          jsonDir: 'cypress/support/cucumber-json', 
          reportPath: './reports/cucumber-htmlreport',
          metadata: {
            browser: {
              name: 'chrome',
              version: '130'
          },
          device: 'Local test machine',
          platform: {
              name: 'osx',
              version: 'Sonoma 14.5'
          },
          },
          customData: {
            title: 'Run info',
            data: [
                {label: 'Project', value: 'Automation Saucedemo'},
                {label: 'Execution Start Time', value: executionStartTime.toLocaleString()},
                {label: 'Execution End Time', value: executionEndTime.toLocaleString()},
                { label: 'Test Duration', value: durationFormatted }
            ]
        }
        });
      });
      return config;
    },
  specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
  chromeWebSecurity: false, 
  retries: 2,
  },
});
