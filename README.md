
# Cypress Test Automation for SauceDemo

This repository contains a Cypress-based test automation suite for [SauceDemo](https://www.saucedemo.com/), designed to run end-to-end tests on the platform using Behavior-Driven Development (BDD) principles. The suite uses `cypress-cucumber-preprocessor` for defining scenarios in Gherkin syntax.

## Project Structure

```
automation-saucedemo-comp/
│
├── cypress/
│   ├── e2e/
│   │   ├── features/               # Cucumber .feature files defining test scenarios
│   │   ├── step_definitions/       # Step definitions matching .feature steps
│   │   └── page_objects/           # Page Object Model files for web elements and actions
│   ├── fixtures/                   # Test data and input files
│   ├── screenshots/                # Screenshots captured during test execution
│   └── videos/                     # Video recordings of test executions
│
├── reports/
│   └── cucumber-htmlreport/        # HTML reports generated after each test run
│
├── cypress.config.js               # Cypress configuration and custom event listeners
├── package.json                    # Project dependencies and scripts
├── README.md                       # Project documentation
└── .gitignore                      # Files and folders to ignore in git
```

## Tools and Technologies

- **Programming Language**: JavaScript
- **Automation Framework**: [Cypress](https://www.cypress.io/) for end-to-end testing
- **BDD Integration**: `cypress-cucumber-preprocessor` for Gherkin syntax and BDD-style testing
- **HTML Reporting**: `multiple-cucumber-html-reporter` to generate customizable test reports with run metadata

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/setyokun/automation-saucedemo.git
   cd automation-saucedemo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Update `cypress.env.json` with the necessary credentials and environment configurations.

## Running Tests

### Execute all tests
   ```bash
   npx cypress run
   ```

### Run specific tests by tags
   ```bash
   npx cypress run --env TAGS="@addItem"
   ```

### Open Cypress GUI for interactive testing
   ```bash
   npx cypress open
   ```

## Reporting

After each test run, an HTML report is generated at `./reports/cucumber-htmlreport`. This report includes detailed information on the executed tests, including metadata such as:

- Browser, Platform name and version
- Test duration and custom run details

## Cypress Documentation

For detailed Cypress documentation, including advanced configuration options, visit the official [Cypress Documentation](https://docs.cypress.io/).
