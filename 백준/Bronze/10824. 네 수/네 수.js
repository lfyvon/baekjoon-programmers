const [a, b, c, d] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(Number(a + b) + Number(c + d));