const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const dp = Array.from(new Array(n + 1), () => new Array(10).fill(1));
for(let i = 2; i <= n; i++){
    for(let j = 1; j < 10; j++){
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j] % 10007;
    }
}
console.log(dp[n].reduce((a, b) => a + b, 0) % 10007);