const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => parseInt(el));
console.log(Math.abs(a - b));