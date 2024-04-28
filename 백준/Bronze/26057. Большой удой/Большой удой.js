const [L, T] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(2 * T - L);