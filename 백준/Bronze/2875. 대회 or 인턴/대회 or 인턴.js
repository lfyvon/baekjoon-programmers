const [n, m, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Math.min(Math.floor((n + m - k) / 3), Math.floor(n / 2), m))