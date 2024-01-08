const n = require('fs').readFileSync('/dev/stdin').toString().trim().split(',').map(Number).reduce((a, b) => a + b, 0);
console.log(n);