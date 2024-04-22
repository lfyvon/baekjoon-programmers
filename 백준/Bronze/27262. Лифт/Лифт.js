const [n, k, a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(`${(n + k - 2) * b} ${(n - 1) * a}` );