inlets = 1;
outlets = 2;

var current = "A";
var n = 10;
var currentStep = 0;

function generate() {
	for (var i = 0; i < n; i++) {
		var next = "";
		for (var j = 0; j < current.length; j++) {
			var c = current.charAt(j);
			if (c == 'A') {
				next += "BC";
			} else if (c == 'B') {
				next += "ACB";
			}
		}
	}
	current = next;
	outlet(0, current);
}

function reset() {
	current = "A";
	currentStep = 0;
	outlet(0, current);
}

function step() {
	if (currentStep <= current.length-1) {
		outlet(1, current.charAt(currentStep));
		currentStep++;
	} else {
		outlet(1, 'EOS');
	}
}