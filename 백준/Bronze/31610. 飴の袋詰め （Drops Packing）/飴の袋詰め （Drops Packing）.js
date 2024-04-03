const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(A * B + C);