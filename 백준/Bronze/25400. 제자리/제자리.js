const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
let count = 0;
for(let i = 0; i < N; i++){
    if(A[i] === count + 1) count++;
}
console.log(N - count);