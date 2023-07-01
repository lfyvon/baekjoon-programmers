const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Math.max(a + b, a - b));
console.log(Math.min(a + b, a - b));