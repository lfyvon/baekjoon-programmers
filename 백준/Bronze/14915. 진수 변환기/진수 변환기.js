const [m, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(m.toString(n).toUpperCase());