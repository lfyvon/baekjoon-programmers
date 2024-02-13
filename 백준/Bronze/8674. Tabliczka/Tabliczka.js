const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(a % 2 === 1 && b % 2 === 1 ? Math.min(a, b) : 0);