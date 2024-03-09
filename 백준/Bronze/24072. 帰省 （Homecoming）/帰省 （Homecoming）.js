const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(A <= C && C < B ? 1 : 0);