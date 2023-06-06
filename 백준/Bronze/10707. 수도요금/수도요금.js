const [a, b, c, d, p] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const x = p * a;
const y = p <= c ? b : b + (p - c) * d;
console.log(Math.min(x, y));