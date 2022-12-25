const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
	input.push(line.toString());
}).on("close", function () {
	n = input.map((el) => Number(el));
    let avg = n.reduce((a, b) => a + b, 0) / 5;
    let mid = n.sort((a, b) => a - b)[2];
    console.log(avg + '\n' + mid);
});