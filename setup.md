# App Setup

1. Fork and clone the repository.
2. At the root directory of the repo, install dependencies by running `yarn` (if needed, [install yarn first](https://yarnpkg.com/getting-started))
3. Run the app by running `yarn start`

You can add more scripts (or change existing ones) in the [`package.json`](./package.json) file.

# Test setup

1. Open a SEPERATE console from the one running the app
2. Start the cypress tests by running `yarn run cypress open`
   1. If Cypress is not installed, follow the promts to install
3. Click on the E2E Testing button
   ![Cypress Welsome Screen](screenshots/welcome-to-cypress.png?raw=true "Welcome to Cypress")
4. Select Chrome
   ![Browser select Screen](screenshots/browser-select.png?raw=true "Browser Select")
5. A new chrome window will launch. Select spec.cy.js to start the tests
   ![Test selection](screenshots/test-selection.png?raw=true "Test Selection")
