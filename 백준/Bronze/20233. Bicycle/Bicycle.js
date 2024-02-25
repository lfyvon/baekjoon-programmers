const [a, x, b, y, t] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(a + Math.max(t - 30, 0) * x * 21, b + Math.max(t - 45, 0) * y * 21);