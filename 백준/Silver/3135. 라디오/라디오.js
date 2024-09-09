const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);
const N = Number(input[1]);
const arr = input.slice(2).map(el => el = Math.abs(Number(el) - B) + 1);
console.log(Math.min(...arr, Math.abs(A - B)));