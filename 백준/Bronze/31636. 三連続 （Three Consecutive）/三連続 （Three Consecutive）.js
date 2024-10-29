const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split("x");
console.log(arr.filter(el => el.length >= 3).length ? "Yes" : "No");