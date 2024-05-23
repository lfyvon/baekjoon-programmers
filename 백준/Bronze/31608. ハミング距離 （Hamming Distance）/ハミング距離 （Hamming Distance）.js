const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const N = Number(input[0]);
const A = input[1];
const B = input[2];
let count = 0;
for(let i = 0; i < N; i++){
    if(A[i] !== B[i]) count++;
}
console.log(count);