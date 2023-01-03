const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const a = input[0].split(' ').map(Number).reduce((a, b) => a + b, 0);
const b = input[1].split(' ').map(Number).reduce((a, b) => a + b, 0);
let result = 0;
a > b ? result = a : result = b;
console.log(result);