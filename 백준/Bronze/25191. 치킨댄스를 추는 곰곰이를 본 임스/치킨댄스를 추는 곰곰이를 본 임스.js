const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const [a, b] = input[1].split(' ').map(Number);
console.log(Math.floor(a / 2) + b > n ? n : Math.floor(a / 2) + b);