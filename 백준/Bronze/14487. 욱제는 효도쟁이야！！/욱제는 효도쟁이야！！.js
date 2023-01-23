const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const v = input[1].split(' ').map(Number);
console.log(v.reduce((a, b) => a + b, 0) - Math.max(...v));