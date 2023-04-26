const { ReportBase } = require('istanbul-lib-report');

function nodeMissing(node) {
	if (node.isSummary()) {
		return '';
	}

	const metrics = node.getCoverageSummary();
	const isEmpty = metrics.isEmpty();
	const lines = isEmpty ? 0 : metrics.lines.pct;

	let coveredLines;

	const fileCoverage = node.getFileCoverage();
	if (lines === 100) {
		const branches = fileCoverage.getBranchCoverageByLine();
		coveredLines = Object.entries(branches).map(([key, { coverage }]) => [
			key,
			coverage === 100
		]);
	} else {
		coveredLines = Object.entries(fileCoverage.getLineCoverage());
	}

	let newRange = true;
	const ranges = coveredLines
		.reduce((acum, [line, hit]) => {
			if (hit) newRange = true;
			else {
				line = parseInt(line);
				if (newRange) {
					acum.push([line]);
					newRange = false;
				} else acum[acum.length - 1][1] = line;
			}

			return acum;
		}, [])
		.map(r => r.length === 1 ? r[0] : `${r[0]}-${r[1]}`);

	return [].concat(...ranges).join(',');
}

function nodeName(node) {
	return node.getRelativeName() || 'All files';
}

function depthFor(node) {
	let ret = 0;
	node = node.getParent();
	while (node) {
		ret += 1;
		node = node.getParent();
	}
	return ret;
}

function isFull(metrics) {
	return (
		metrics.statements.pct === 100 &&
		metrics.branches.pct === 100 &&
		metrics.functions.pct === 100 &&
		metrics.lines.pct === 100
	);
}

class TextReport extends ReportBase {
	constructor(opts) {
		super(opts);

		opts = opts || {};
		this.file = opts.file || "coverage.md";
		this.cw = null;
	}

	onStart(root, context) {
		this.cw = context.writer.writeFile(this.file);
		this.cw.println("# Coverage");
		this.cw.println(`| File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines |`);
		this.cw.println(`|${" :--- |".repeat(6)}`);
	}

	onSummary(node, context) {
		const colorizer = this.cw.colorize.bind(this.cw);

		const metrics = node.getCoverageSummary();

		const mm = {
			statements: metrics.statements.pct,
			branches: metrics.branches.pct,
			functions: metrics.functions.pct,
			lines: metrics.lines.pct
		};

		const colorize = metrics.isEmpty
			? str => str
			: (str, key) => colorizer(str, context.classForPercent(key, mm[key]));
	
		const elements = [
			colorize('&nbsp;'.repeat(4).repeat(depthFor(node)) + nodeName(node), 'statements'),
			colorize(mm.statements, 'statements'),
			colorize(mm.branches, 'branches'),
			colorize(mm.functions, 'functions'),
			colorize(mm.lines, 'lines'),
			colorizer(
				nodeMissing(node),
				mm.lines === 100 ? 'medium' : 'low'
			)
		]

		this.cw.println("|" + elements.join("|") + '|');
	}

	onDetail(node, context) {
		return this.onSummary(node, context);
	}

	onEnd() {
		this.cw.close();
	}
}

module.exports = TextReport;

