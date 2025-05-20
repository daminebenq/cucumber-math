# 🥗 Cucumber Mathematics

This project demonstrates behavior-driven development (BDD) using Node.js and [Cucumber.js](https://github.com/cucumber/cucumber-js).

## 🔧 Setup Instructions

1. Download or clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run tests:

```bash
npm test
```

   Or directly with Cucumber.js:

```bash
npx cucumber-js
```

4. Generate HTML reports:

```bash
npm run test:report
```

   After running this command, you can find the HTML report at `reports/cucumber-report.html`

## 📊 Reports

This project includes HTML reporting for better visualization of test results:

- **Local Reports**: Run `npm run test:report` to generate HTML reports locally
- **GitHub Pages**: Test reports are automatically published to GitHub Pages when pushing to main
- **Report URL**: https://YOUR_USERNAME.github.io/cucumber-math/cucumber-report.html

## 📄 Project Structure

```
cucumber-math/
├── features/
│   ├── cucumber.feature               # The original Gherkin feature file
│   ├── dynamic_cucumber.feature       # Dynamic scenarios using Scenario Outlines
│   └── step_definitions/
│       ├── salad.steps.js             # Step definitions for vegetable scenarios
├── reports/                           # Generated test reports (HTML)
├── docs/                              # GitHub Pages documentation
├── .github/workflows/                 # GitHub Actions workflows
├── package.json                       # Node.js configuration and dependencies
└── README.md                          # Project documentation
```

## ✅ Scenarios Covered

- Tracking vegetable inventory
- Consuming more vegetables than available (supports negative inventory)
- Preparing salads from given vegetable quantities
- Dynamic testing with Scenario Outlines

## 📌 Notes

- Step definitions support singular/plural and dynamic phrasing (e.g., "consume", "left", "start with").
- Assertions are handled with Node.js native `assert` module.
- Clean structure and comments are provided in `salad.steps.js` for clarity.

## 🔄 Dynamic Testing Benefits

- **Reduced Code Duplication**: Using Scenario Outlines and parameterized steps
- **Improved Maintainability**: Single point of change for multiple test cases
- **Flexible Matching**: Generic step definitions handle various vegetable types
- **Easier Extension**: Add new test cases by simply adding rows to Examples tables

## 📊 HTML Reporting Benefits

- **Visual Results**: Easy-to-read format for test outcomes
- **Stakeholder Sharing**: Professional reports for non-technical team members
- **Execution Details**: Step-by-step breakdown of test execution
- **Failure Analysis**: Clear indication of where tests are failing
- **CI/CD Integration**: Automated publishing via GitHub Actions