const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
console.log(Number(input[1]) * Number(input[2]));