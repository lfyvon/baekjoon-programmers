const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => parseInt(el));

let result = Math.floor(a / (c - b)) + 1;
if(b >= c) result = -1;

console.log(result);