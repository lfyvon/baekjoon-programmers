const [n, a] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(Math.round((180 - a) / 2 + a / 2));