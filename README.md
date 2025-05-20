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

## 📄 Project Structure

```
cucumber-math/
├── features/
│   ├── cucumber.feature               # The Gherkin feature file with test scenarios
│   └── step_definitions/
│       └── salad.steps.js             # Step definitions (test implementation)
├── package.json                       # Node.js configuration and dependencies
└── README.md                          # Project documentation
```

## ✅ Scenarios Covered

- Tracking vegetable inventory
- Consuming more vegetables than available (supports negative inventory)
- Preparing salads from given vegetable quantities

## 📌 Notes

- Step definitions support singular/plural and dynamic phrasing (e.g., “consume”, “left”, “start with”).
- Assertions are handled with Node.js native `assert` module.
- Clean structure and comments are provided in `salad.steps.js` for clarity.