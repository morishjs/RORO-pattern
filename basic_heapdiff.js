const
memwatch = require('@airbnb/node-memwatch');
url = require('url');

function roro({a, b}) {
	console.log(a, b);
}

function nonRoro(a, b) {
	console.log(a, b);
}

memwatch.gc();

function roroBenchmark() {
var hd = new memwatch.HeapDiff();

for (let i = 0; i < 10000; i++) {
	roro({a: 1, b: 2});
}

var hde = hd.end();

console.log(JSON.stringify(hde, null, 2));
}


function nonRoroBenchmark() {
var hd = new memwatch.HeapDiff();

for (let i = 0; i < 10000; i++) {
	nonRoro(1, 2);
}

var hde = hd.end();

console.log(JSON.stringify(hde, null, 2));
}


//roroBenchmark();
nonRoroBenchmark();
