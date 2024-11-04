const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(n - 7 > 0 ? n - 7 : m + 7);