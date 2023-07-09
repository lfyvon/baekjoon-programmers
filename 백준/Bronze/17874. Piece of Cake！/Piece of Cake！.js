const [n, h, v] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(4 * Math.max(n - h, h) * Math.max(n - v, v));