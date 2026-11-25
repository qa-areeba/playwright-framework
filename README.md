# Playwright E-Commerce Test Automation (TypeScript)

![Playwright Tests](https://github.com/qa-areeba/playwright-framework/actions/workflows/playwright-tests.yml/badge.svg)

End-to-end UI test automation for the [Tricentis Demo Web Shop](https://demowebshop.tricentis.com), built with [Playwright](https://playwright.dev/) and TypeScript using the Page Object Model. The suite runs in GitHub Actions on every push and pull request.

## What is tested

| Area | Spec file | Tests |
| --- | --- | --- |
| Homepage smoke check (page title) | `tests/homepage.spec.ts` | 1 |
| Registration with a unique e-mail | `tests/register.spec.ts` | 1 |
| Login with the registered user | `tests/login.spec.ts` | 1 |
| Logout | `tests/logout.spec.ts` | 1 |
| Negative login (wrong password, empty form) | `tests/login.negative.spec.ts` | 2 |
| Data-driven invalid login (5 data sets) | `tests/login.dataDriven.spec.ts` | 5 |
| **Total** | | **11** |

## Features

- Page Object Model (`pages/`) with selectors and UI messages kept in one place (`selectors.ts`, `messages.ts`)
- Unique e-mail generated at run time so registration can be repeated
- Test data shared between specs through `data/testData.json`
- Data-driven negative login tests (`data/invalidLoginData.ts`)
- Headless in CI, headed locally
- HTML report generated on every run and uploaded as a CI artifact

## Tech stack

- [Playwright](https://playwright.dev/) test runner
- TypeScript, Node.js 20
- GitHub Actions (CI)

## Project structure

```text
.
├── .github/workflows/playwright-tests.yml   # CI workflow
├── data/                                    # Test data (invalid logins, registered user)
├── pages/                                   # Page Object Model classes
├── tests/                                   # Test specs
├── utils/                                   # Helpers (unique e-mail, test data, login)
├── messages.ts                              # Expected UI messages
├── selectors.ts                             # Locators used by the page objects
├── playwright.config.ts                     # Runner configuration
└── package.json
```

## Getting started

Prerequisites: Node.js 20 or later and Git.

```bash
git clone https://github.com/qa-areeba/playwright-framework.git
cd playwright-framework
npm ci
npx playwright install
```

## Run the tests

```bash
npm test                  # run all tests
npm run test:register     # run only the registration test
npm run report            # open the HTML report
```

### Test data note

The registration test creates a user with a unique e-mail (`user_<timestamp>@example.com`) and saves it to `data/testData.json`. The login and logout tests read that file, so when running a single spec, run `npm run test:register` first.

## Continuous integration

The workflow `.github/workflows/playwright-tests.yml` runs on every push and pull request. It:

1. installs dependencies with `npm ci` and the Playwright browsers,
2. runs the registration test to generate the test data,
3. runs all remaining tests,
4. uploads the HTML report as the `playwright-report` artifact.

To download the report: open the **Actions** tab, select a run, and download `playwright-report` under **Artifacts**.

## Author

Areeba Zakir, QA Automation Engineer
[LinkedIn](https://www.linkedin.com/in/areeba-zakir-38364328b) · [GitHub](https://github.com/qa-areeba)
