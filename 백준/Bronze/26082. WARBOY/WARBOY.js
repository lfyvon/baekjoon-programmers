const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(b * c * 3 / a);