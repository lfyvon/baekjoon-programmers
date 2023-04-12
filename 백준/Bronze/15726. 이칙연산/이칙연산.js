const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().split(' ');
console.log(Math.floor(Math.max(a * b / c, a / b * c)));