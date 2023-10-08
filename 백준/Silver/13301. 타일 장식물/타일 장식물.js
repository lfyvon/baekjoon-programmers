const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const dp = new Array(n + 1).fill(0n);
dp[1] = 4n;
dp[2] = 6n;
for(let i = 3; i <= n; i++){
    dp[i] = dp[i - 1] + dp[i - 2];
}
console.log(dp[n].toString());