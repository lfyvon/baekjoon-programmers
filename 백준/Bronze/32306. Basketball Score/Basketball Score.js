const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const A = input[0].split(" ").map(Number);
const B = input[1].split(" ").map(Number);
let aSum = A[0] + A[1] * 2 + A[2] * 3;
let bSum = B[0] + B[1] * 2 + B[2] * 3;
console.log(aSum > bSum ? 1 : aSum < bSum ? 2 : 0);
