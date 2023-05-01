const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const dp = Array.from(Array(n + 1), () => new Array(k + 1).fill(0));
for(let i = 0; i <= n; i++){
    for(let j = 0; j <= i; j++){
        if(j === 0 || j === i) dp[i][j] = 1;
        else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
}
console.log(dp[n - 1][k - 1]);