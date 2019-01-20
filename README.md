# The example of integration Vue + Jest + Cypress + Circle 
[![CircleCI](https://circleci.com/gh/kcrebound/vue-circleci-example.svg?style=svg)](https://circleci.com/gh/kcrebound/vue-circleci-example)
[![codecov](https://codecov.io/gh/kcrebound/vue-circleci-example/branch/master/graph/badge.svg)](https://codecov.io/gh/kcrebound/vue-circleci-example)

## Features
* Jest with JUnit reports for pretty view failed tests in CircleCI
* Cypress with JUnit reports (each test will generate separate XML using `[hash]` in the name of a report file)
![Cypress failed a test with JUnit reports](screenshots/circleci-cypress.png)
* Video and screenshots uploaded to awesome https://dashboard.cypress.io 
![Dashboard example](screenshots/dashboard-cypress.png)
* Coverage reports by codecov.io

##  Reference list
https://github.com/cypress-io/cypress-example-docker-circle

## Using

### Environment variables
```
CYPRESS_RECORD_KEY
CODECOV_TOKEN
```
### Commands
```
npm run ci:unit
npm run ci:e2e
```
