const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const k = Number(input[0]);
const [d1, d2] = input[1].split(' ').map(Number);
const h = k ** 2 - (Math.abs(d1 - d2) / 2) ** 2;
console.log(h);