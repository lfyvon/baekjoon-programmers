const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const dp = new Array(117).fill(0n);
dp[1] = dp[2] = dp[3] = 1n;
for(let i = 4; i <= n; i++){
    dp[i] = dp[i - 1] + dp[i - 3]; 
}
console.log(dp[n].toString());