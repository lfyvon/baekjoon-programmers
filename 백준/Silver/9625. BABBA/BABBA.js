const k = Number(require('fs').readFileSync('/dev/stdin').toString());
const dp = Array.from(Array(45), () => Array(2).fill(0));
dp[1] = [0, 1];
dp[2] = [1, 1];
for(let i = 3; i <= k; i++){
    dp[i] = [dp[i - 2][0] + dp[i - 1][0], dp[i - 2][1] + dp[i - 1][1]];
}
console.log(dp[k].join(" "));