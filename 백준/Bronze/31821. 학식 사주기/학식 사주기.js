const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const N = input[0];
const A = input.slice(1, N + 1);
const B = input.slice(N + 2);
console.log(B.map(el => A[el - 1]).reduce((a, b) => a + b, 0));
