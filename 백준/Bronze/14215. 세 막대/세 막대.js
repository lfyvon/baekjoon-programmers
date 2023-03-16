const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number).sort((a, b) => a - b);
const peri = a + b + Math.min(c, a + b - 1);
console.log(peri);