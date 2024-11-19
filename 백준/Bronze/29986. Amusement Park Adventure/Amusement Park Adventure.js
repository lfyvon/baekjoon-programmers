const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, H] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
let count = 0;
for(let i = 0; i < N; i++){
    if(A[i] <= H) count++;
}
console.log(count);