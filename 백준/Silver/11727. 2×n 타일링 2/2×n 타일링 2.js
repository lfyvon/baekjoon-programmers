const n = parseInt(require('fs').readFileSync('/dev/stdin').toString());

const dp = new Array(n + 1).fill(0);

dp[1] = 1
dp[2] = 3

for (let i = 3; i <= n; i++) {
    if (i % 2 == 0) {
        dp[i] = (dp[i - 1] * 2 + 1) % 10007;
    } else {
        dp[i] = (dp[i - 1] * 2 - 1) % 10007;
    }
}

console.log(dp[n]);