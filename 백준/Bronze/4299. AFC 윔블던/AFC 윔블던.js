const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Number.isInteger((a - b) / 2) && a - b >= 0 ? (a + b) / 2 + ' ' + (a - b) / 2 : -1);