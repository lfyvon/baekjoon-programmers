const [m, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(m === 1 || n === 1 ? (m + n) - 1 : (m + n - 2) * 2);
