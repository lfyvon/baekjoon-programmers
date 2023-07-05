const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => b - a);
console.log(a + b);