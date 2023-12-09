const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const dp = new Array(N).fill(0);
let result = [];

for(let i = 1; i < N; i++){
    for(let j = 0; j < i; j++){
        if(A[i] > A[j]){
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}
let max = Math.max(...dp);
console.log(max + 1);
for(let i = N - 1; i >= 0; i--){
    if(dp[i] === max){
        result.push(A[i]);
        max--;
    }
}
console.log(result.reverse().join(" "));