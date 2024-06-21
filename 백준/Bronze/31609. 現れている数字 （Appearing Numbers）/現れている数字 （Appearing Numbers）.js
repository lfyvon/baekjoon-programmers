const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(" ").map(Number)
const num = new Array(10).fill(-1);
for(let i = 0; i < N; i++){
    num[A[i]] = A[i];
}
console.log(num.filter(el => el !== -1).join("\n"));