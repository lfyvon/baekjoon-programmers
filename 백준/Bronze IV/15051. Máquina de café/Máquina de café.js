const [A1, A2, A3] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(Math.min(A1 * 4 + A2 * 2, A1 * 2 + A3 * 2, A2 * 2 + A3 * 4));