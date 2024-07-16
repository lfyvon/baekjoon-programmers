const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const tshirts = input[1].split(" ").map(Number);
const [T, P] = input[2].split(" ").map(Number);
let countT = tshirts.reduce((a, b) => a + Math.ceil(b / T), 0);
let countP1 = Math.floor(N / P);
let countP2 = N % P;
console.log(countT);
console.log(countP1, countP2);