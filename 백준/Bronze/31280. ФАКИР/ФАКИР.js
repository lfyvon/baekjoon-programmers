const [a, b, c, d] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => b - a);
console.log(a + b + c + 1);