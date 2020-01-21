# Comparethemarket Scenarios

*Run some sample tests across Chrome and Firefox*

## Design
* NPM for Javascript
* Webdriver.io as the runner
* ES6 for clarity
* Jasmine as the test framework
* Page Object pattern

## Run Instructions
* git clone https://github.com/ptoora/adl.git
* cd adl 
* npm install 
* BASEURL=https://www.google.com npm test
* nb. BASEURL is injected to support testiong against different environments

## Notes for improvement
1. Abstract Webdriver.io to support switching drivers
2. Not use built-in WDIO Page Object as they add a lot of ceremony
3. Capture screenshots