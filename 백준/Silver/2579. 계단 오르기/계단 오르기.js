const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => parseInt(el));

const n = input[0];
const stairs = input.slice(1);

const dp = new Array(n + 1);

dp[1] = stairs[0];
dp[2] = stairs[0] + stairs[1];
dp[3] = Math.max(stairs[0], stairs[1]) + stairs[2];

for(let i = 4; i <= n; i++){
    dp[i] = Math.max(dp[i - 2], dp[i - 3] + stairs[i - 2]) + stairs[i - 1];
}

console.log(dp[n]);