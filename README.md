# 🛒 E-Commerce Automation Suite (Playwright + TypeScript)

This project is an end-to-end automation suite for a sample e-commerce application using [Playwright](https://playwright.dev/) and TypeScript. It covers key user flows such as registration, login, and logout, and is integrated with GitHub Actions for Continuous Integration.

## 📌 Features

- Automated tests for user registration, login validations, and logout
- Dynamic email generation to ensure test repeatability
- Test data sharing across specs using a JSON file
- Modular structure based on the Page Object Model (POM)
- CI setup with GitHub Actions for test execution on every push
- HTML report generation

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/) (Test runner)
- TypeScript
- Node.js
- GitHub Actions (CI/CD)

## 📁 Folder Structure

├── tests/               # Test cases
├── pages/               # Page Object Model classes
├── utils/               # Helpers like test data utilities
├── data/                # Generated test data (e.g., testData.json)
├── messages.ts          # UI success and error messages
├── playwright.config.ts # Test runner configuration
├── .github/workflows/   # CI workflow file
└── README.md


## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- Git

### Install Dependencies

```bash
npm install
npx playwright install
Run Tests Locally
bash
npx playwright test
View the HTML Report
bash
npx playwright show-report
🔄 Continuous Integration (CI)
CI is configured using GitHub Actions:

Workflow: .github/workflows/playwright-tests.yml

Runs tests on every push to master

Generates and uploads the HTML report as a downloadable artifact

📥 Downloading CI Reports
After a workflow run:

Go to your GitHub repository

Click on the Actions tab

Select the latest successful run

Scroll to the Artifacts section and download the HTML report

👤 Author
Areeba Zakir Quality Assurance Engineer | Playwright Automation Specialist

> “A good test suite catches bugs. A great one prevents them.”
