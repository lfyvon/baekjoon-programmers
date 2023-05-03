const [s, a] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Math.floor(Math.min(s, a) / 2));