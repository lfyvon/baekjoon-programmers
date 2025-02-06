const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[1].split(" ").map(Number);
const M = input[2].split(" ").map(Number);
console.log(Math.max(...N) + Math.max(...M));