const input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].trim().split("");
const B = input[2].split("");
console.log(A.filter((v, i) => v !== B[i]).length);