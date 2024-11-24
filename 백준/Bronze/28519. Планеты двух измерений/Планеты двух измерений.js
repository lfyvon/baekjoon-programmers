const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => a - b);
console.log(m > n ? n * 2 + 1 : n * 2);