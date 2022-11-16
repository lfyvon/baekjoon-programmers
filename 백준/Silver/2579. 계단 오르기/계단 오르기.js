const stairs = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => parseInt(el));

const n = stairs[0];
const dp = new Array(n + 1);

dp[1] = stairs[1];
dp[2] = stairs[1] + stairs[2];
dp[3] = Math.max(stairs[1], stairs[2]) + stairs[3];

for(let i = 4; i <= n; i++){
    dp[i] = Math.max(dp[i - 2], dp[i - 3] + stairs[i - 1]) + stairs[i];
}

console.log(dp[n]);