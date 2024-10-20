const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const k = Number(input[0]);
const [a, b, c, d] = input[1].split(" ").map(Number);
console.log(a * k + b === c * k + d ? `Yes ${a * k + b}`: "No");