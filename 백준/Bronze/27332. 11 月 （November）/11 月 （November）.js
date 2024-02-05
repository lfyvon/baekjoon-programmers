const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(A + B * 7 > 30 ? 0 : 1);