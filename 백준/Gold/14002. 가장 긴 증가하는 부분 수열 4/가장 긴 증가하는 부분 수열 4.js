const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const dp = new Array(N).fill(0);
let result = [];
for(let i = 0; i < N; i++){
    let max = 0;
    let maxIdx = -1;
    for(let j = 0; j < i; j++){
        if(A[i] > A[j] && dp[j] > max){
            max = dp[j];
            maxIdx = j;
        }
    }
    dp[i] = max + 1;
    result[i] = maxIdx !== -1 ? [...result[maxIdx].slice(), (A[i])] : [A[i]];
}

const maxLen = Math.max(...dp);

console.log(maxLen);
console.log(result[dp.indexOf(maxLen)].join(" "));