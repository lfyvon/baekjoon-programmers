const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const dp = Array.from({length : n + 1}, () => 0);
dp[1] = 1;
for(let i = 2; i <= n; i++){
    dp[i] = dp[i - 1] + dp[1];
    for(let j = 2; j * j <= i; j++){
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
}
console.log(dp[n]);