const [a, b] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
console.log(a * (100 - b) / 100 >= 100 ? 0 : 1);