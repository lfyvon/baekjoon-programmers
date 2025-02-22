const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = Math.floor((B - A + 1) / 2);
if(A % 2 === 0 || B % 2 === 1) result++;
console.log(result);