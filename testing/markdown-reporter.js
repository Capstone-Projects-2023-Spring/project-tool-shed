const fs = require('fs');
const { render } = require('mustache');

const template = `
# Results
| &nbsp  |   	&#35; |    % |
| ------ | --: | ---: |
| Passed | {{numPassedTests}} | {{percentPassedTests}}% |
| Failed | {{numFailedTests}} | {{percentFailedTests}}% |
| Total  | {{numTotalTests}} | 100% |
`.trim();

class DocumentTestHooksReporter {
	constructor(globalConfig, options) {
		this._globalConfig = globalConfig;
		this._options = options;
	}

	toPercent(n) {
		return Math.round(n * 100);
	}

	onRunComplete(unused, runResults) {
		const {numFailedTests, numPassedTests } = runResults;
		const numTotalTests = numFailedTests + numPassedTests;
		const percentFailedTests = this.toPercent(numFailedTests / numTotalTests);
		const percentPassedTests = this.toPercent(numPassedTests / numTotalTests);

		const results = {
			numFailedTests,
			numPassedTests,
			numTotalTests,
			percentFailedTests,
			percentPassedTests,
		};

		const output = render(template, results).trim();
		fs.writeFileSync("documentation/docs/testing/results/results.md", output);
	}
}

module.exports = DocumentTestHooksReporter;
