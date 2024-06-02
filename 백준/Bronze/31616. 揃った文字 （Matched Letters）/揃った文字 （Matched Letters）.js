const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
console.log(N === input[1].split(input[1][0]).length - 1 ? "Yes" : "No");