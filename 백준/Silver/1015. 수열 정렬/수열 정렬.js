const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const sortedA = A.slice().sort((a, b) => a - b);
const P = [];
for(let i = 0; i < N; i++){
    P.push(sortedA.indexOf(A[i]));
    sortedA[P[i]] = -1;
}
console.log(P.join(" "));