inlets = 1;
outlets = 2;

var current = [0];
var currentStep = 0;

function generate() {
	var next = new Array();
	for (var j = 0; j < current.length; j++) {
		var c = current[j];
		if (c == 0) {
			next.push(2);
			next.push(1);
		} else if (c == 1) {
			next.push(0);
			next.push(1);
		} else if (c == 2) {
			next.push(3);
		} else if (c == 3) {
			next.push(0);
		}
	}
	current = next;
	outlet(0, current);
}

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
		outlet(1, 'EOS');
	}
}