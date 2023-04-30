const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const dp = Array.from(Array(n + 1), () => new Array(k + 1).fill(0));
for(let i = 0; i <= n; i++){
    for(let j = 0; j <= i; j++){
        dp[i][j] = j === 0 || j === i ? 1 : (dp[i - 1][j - 1] + dp[i - 1][j]) % 10007;
    }
}
console.log(dp[n][k]);