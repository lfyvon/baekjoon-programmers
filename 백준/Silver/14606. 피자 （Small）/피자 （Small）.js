const n = parseInt(require('fs').readFileSync('/dev/stdin').toString());
const dp = new Array(n + 1).fill(0);

for(let i = 2; i <= n; i++){
    dp[i] = dp[i - 1] + i - 1;
}

console.log(dp[n]);