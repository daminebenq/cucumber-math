# Cucumber Mathematics Reports

This directory contains the HTML reports generated from Cucumber.js test runs.

## Available Reports

- [Latest Test Report](cucumber-report.html)

## About HTML Reports

The HTML reports provide a visual representation of test execution results, making it easier to:

- Identify failing scenarios
- View step-by-step execution details
- Share results with stakeholders
- Track test coverage over time

## How Reports Are Generated

Reports are generated using the built-in HTML formatter in Cucumber.js:

```bash
npx cucumber-js --format html:reports/cucumber-report.html
```

## GitHub Pages Integration

These reports are automatically published to GitHub Pages when changes are pushed to the main branch, using the GitHub Actions workflow defined in `.github/workflows/gh-pages.yml`.

## Local Development

To generate reports locally:

```bash
npm run test:report
```

This will run the tests and generate the HTML report in the `reports` directory.