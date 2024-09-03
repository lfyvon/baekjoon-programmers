const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
const dp = new Array(1000001).fill(0);
dp[1] = 1;
for(let i = 2; i <= n; i++){
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
}
console.log(dp[n]);