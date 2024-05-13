const [a, b, c, d] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(a * b > c * d ? "M" : a * b < c * d ? "P" : "E");