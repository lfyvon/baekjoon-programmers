const bottles = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const result = bottles.reduce((a, b) => a + b, 0) * 5;
console.log(result);