const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(a * b);