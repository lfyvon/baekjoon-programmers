const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(n * m - 1);