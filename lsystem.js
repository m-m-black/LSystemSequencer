inlets = 1;
outlets = 2;

var current = [0];
var currentStep = 0;
var rules = null;

function reset() {
	current = [0];
	currentStep = 0;
	outlet(0, current);
}

function step() {
	if (currentStep <= current.length-1) {
		outlet(1, current[currentStep]);
		currentStep++;
	} else {
		currentStep = 0;
	}
}

function parseRules(rulesString) {
	rules = rulesString.split("/");
}

function generate() {
	var next = new Array();
	for (var i = 0; i < current.length; i++) {
		var c = current[i];
		var rule = rules[c].toString();
		for (var y = 0; y < rule.length; y++) {
			next.push(parseInt(rule[y]));
		}
	}
	current = next;
	outlet(0, current);
}