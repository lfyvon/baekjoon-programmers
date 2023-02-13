const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const max = 90;
const dp = Array(max + 1).fill(0n);
dp[1] = 1n;
for(let i = 2; i <= max; i++){
    dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[n].toString());