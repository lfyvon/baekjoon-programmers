const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Math.min(a - 1, b) * 2 + 1);