const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Math.max(c - b, b - a) - 1);