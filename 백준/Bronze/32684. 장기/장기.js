const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const A = input[0].split(" ").map(Number);
const B = input[1].split(" ").map(Number);
let sumA = A[0] * 13 + A[1] * 7 + A[2] * 5 + A[3] * 3 + A[4] * 3 + A[5] * 2;
let sumB = B[0] * 13 + B[1] * 7 + B[2] * 5 + B[3] * 3 + B[4] * 3 + B[5] * 2 + 1.5;
console.log(sumA > sumB ? "cocjr0208" : "ekwoo");