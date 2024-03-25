const [STR, DEX, INT, LUK, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let sum = STR + DEX + INT + LUK;
console.log(N * 4 > sum ? N * 4 - sum : 0);