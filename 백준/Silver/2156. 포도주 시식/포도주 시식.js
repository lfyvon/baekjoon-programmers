const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const n = input[0];
const dp = new Array(input.length + 1).fill(0);
dp[1] = input[1];
dp[2] = input[1] + input[2];
for(let i = 3; i <= n; i++){
    dp[i] = Math.max(dp[i - 3] + input[i - 1] + input[i], dp[i - 2] + input[i], dp[i - 1]);
}
console.log(dp[n]);