const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const x = Math.min(k + 60, n);
console.log(x * 1500 + (n - x) * 3000);