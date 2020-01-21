# CTM Scenarios

*Run some sample tests in Chrome

## Design
* NPM for Javascript
* Webdriver.io as the runner
* ES6 for clarity
* Jasmine as the test framework
* Page Object pattern

## Run Instructions
* git clone https://github.com/ptoora/ctm.git
* cd ctm 
* npm install 
* BASEURL=https://energy.comparethemarket.com/energy/v2/?AFFCLIE=TSTT npm test
* nb. BASEURL is injected to support testing against different environments

## Notes for improvement
1. Abstract Webdriver.io to support switching drivers
2. Not used built-in WDIO Page Object as they add a lot of ceremony
3. Capture screenshots