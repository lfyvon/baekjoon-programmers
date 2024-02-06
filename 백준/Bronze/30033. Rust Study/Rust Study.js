const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);
let count = 0;
for(let i = 0; i < N; i++){
    if(B[i] >= A[i]) count++;
}
console.log(count);