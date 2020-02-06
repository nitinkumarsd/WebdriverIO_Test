# WebdriverIO

WebdriveIO first project with basic code and BDD - cucumber implementation. Allure report also encorporated

## Getting Started

Clone the project from "https://github.com/nitinkumarsd/webdriverio.git" on local machine

### Prerequisites

1. Node.js installed
2. Editor(VScode, intellij etc) installed
3. Install NVM to assist managing multiple active Node.js version
4. Make sure chrome driver is upto date

```
npm init -y
```

### Project Set up

A step by step series of examples that tell you how to get a development env running
1. Clone the project as mentioned location to local
2. Open project folder in any editor(vs code)
3. Right clickon package.js and open it in terminal
4. Run below commands for installation and project setup 

Install WebdriverIO CLI

```
npm install webdriverio –save-dev
npm i --save-dev @wdio/cli

```


1. Run below command to download and setup cucumber dependencies
```
npm install @wdio/cucumber-framework --save-dev
```
In pakage.json -> devdependencies -> "@wdio/cucumber-framework": should exist with latest version
 
2. Run below command to download and setup Allure Report dependencies
```
npm install @wdio/allure-reporter --save-dev
```
In pakage.json -> devdependencies -> "allure-commandline": should exist with latest version

3. Run below command to download and setup Json Parsor to read test data from json file
```
$ npm install parse-json --save-dev
```
In pakage.json -> dependencies -> "parse-json": should exist with latest version

4. Run below command to download and setup chrome driver services
```
$ npm install chromedriver --save-dev
```
In pakage.json -> dependencies -> "wdio-chromedriver-service": and "chromedriver": should exist with latest versions

5. Run below command to download and setup Internet Explorer services
```
$ npm install wdio-iedriver-service --save-dev
```
In pakage.json -> dependencies -> "wdio-iedriver-service": should exist with latest version

## Running the tests

1. Open gitbash in project location and run following command: "npm run test" or
2. If using "VS code" editor, open terminal in project location and run command "npm run test"

## Report generation
Allure report generate automatic after test completion, if not then run following command to geretae report: "$ npm run open-allure"

### And coding style tests

A very basic coding style is used to prepare the solution

## Authors

* **Nitin Kumar** - *Initial work* 

