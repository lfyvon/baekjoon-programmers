const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const dp = Array.from(new Array(n + 1).fill(0));
dp[1] = dp[2] = 1n;
for(let i = 3; i <= n; i++){
    dp[i] = dp[i - 1] + dp[i - 2];
}
console.log(dp[n].toString());