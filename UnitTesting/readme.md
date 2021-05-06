### Step1 
Write the below code in package.json
```json
"scripts": {
"test": "mocha",
"start": "node server.js"
}
```
### Step2

Write in terminal
```shell
npm run test
```

## Code Coverage
### Step 1
install nyc package 
```shell
npm i nyc
```
### Step 2
append the below code in package.json  
```json
"cover" : "nyc mocha"
```
can also append 
```json
"cover": "nyc --reporter=html mocha"
```
### Step 3
run the below command
```shell
npm run cover
```
### Step 4
If using plugin 'COVERAGE GUTTER'
```json
"cover": "nyc --reporter=1covonly mocha"

```
then on shell,
```shell
npm run cover
```
then use coverage gutter 
Plugins:
Coverage gutters and mocha sidebar for vscode



Note:
Make sure that util_test.js file must be under the folder Test

Helpful links:
[https://www.jetbrains.com/help/webstorm/code-coverage.html]

Additional info:
Code coverage :
Code coverage is a measurement of how many lines/blocks
/arcs of your code are executed while the automated tests are running.

Code coverage is collected by using a specialized tool to instrument 
the binaries to add tracing calls and run a full set of automated 
tests against the instrumented product. 
A good tool will give you not only the percentage of the 
code that is executed, but also will allow you to drill into the 
data and see exactly which lines of code were executed during a 
particular test.


npm package use for code coverage : 
nyc ( part of istanbul framework)
Github link :  [https://github.com/istanbuljs/nyc.git]


Automated testing packages used : chai & mocha
mocha package runs the test


