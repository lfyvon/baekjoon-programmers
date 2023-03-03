const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const a = input[1].split(' ').map(Number).sort((a, b) => b - a);
const b = input[2].split(' ').map(Number).sort((a, b) => a - b);
const result = a.map((el, i) => el * b[i]).reduce((a, b) => a + b, 0);
console.log(result);