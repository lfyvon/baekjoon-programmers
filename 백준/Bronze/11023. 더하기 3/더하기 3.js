const n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(n.reduce((a, b) => a + b, 0));