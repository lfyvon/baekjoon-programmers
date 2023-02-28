const [a, b, c, d] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Math.abs((a + d) - (b + c)));