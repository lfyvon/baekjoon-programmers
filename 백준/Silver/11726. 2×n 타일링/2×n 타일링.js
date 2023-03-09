const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
let dp = [1, 2, 3];
for(let i = 3; i < n; i++){
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[n-1]);