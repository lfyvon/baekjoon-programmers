const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const dp = Array.from({length: n + 1}, () => 0);
dp[1] = 1;
dp[2] = 2;
for(let i = 3; i <= n; i++){
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}
console.log(dp[n]);