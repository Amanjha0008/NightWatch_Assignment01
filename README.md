# NightWatch_Assignment01

## Overview
Here , In this Assignment we have used the POM (Page Object Model) & created the diffrent Pages for the diffrent Functionalities It will lead our code more efficient, reusable, scalable & maintable.

## Website (refer to test)
https://www.saucedemo.com/

## Test Overview
1) I Created the Global hooks in the 'globalModule.js' in the globals directory for the reusablity.
2) And I created the diffrent pages - 'FormPage.js' , 'AddToCart.js' , 'Checkout.js' and run them in the 'forms.test.js' inside the test directory.
3) I have used various locator strategy in it
```bash
username: "#user-name",
password: {
  selector: "#password",
  locatorStrategy: 'css Selector',
},
```
4) For the Print Operation - I use
```bash
logger.info("Starting test")
```
5) For using this logger we have to install 'winston'
#### command: (in terminal)
```bash
npm install winston
```
#### After that I created a logger.js inside the test directory and configured winston
```bash
//This is my logger file
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

module.exports = logger;

```
## Test Assert and Passed 
1) PASSED. 15 total assertions 

### How to clone the repo 
```bash
git clone https://github.com/Amanjha0008/NightWatch_Assignment01/tree/Feature-Branch
```

### How to run the Project?
1) #### Go to the Terminal
2) #### Run this Command - npx nightwatch test/forms.test.js --env chrome
3) #### See the Output 
