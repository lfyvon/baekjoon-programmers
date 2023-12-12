const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const M = (B - A) / 400;
console.log(1 / (1 + 10 ** M));