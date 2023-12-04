const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log((a <= 3 ? 0 - a : 24 - a) + b);