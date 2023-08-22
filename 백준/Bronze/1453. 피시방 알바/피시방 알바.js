const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const set = new Set(input[1].split(" ").map(Number));
console.log(n - set.size);