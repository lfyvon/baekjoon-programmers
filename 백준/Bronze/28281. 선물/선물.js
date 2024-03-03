const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, X] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
let result = A[0] + A[1];
for(let i = 2; i < N; i++){
    result = Math.min(result, A[i - 1] + A[i]);
}
console.log(result * X);