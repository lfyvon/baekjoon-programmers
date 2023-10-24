const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const MAX_NUM = 69;
const dp = new Array(MAX_NUM).fill(1n);
dp[2] = 2n;
dp[3] = 4n;
for(let i = 4; i < MAX_NUM; i++){
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3] + dp[i - 4];
}
const n = input[0];
const result = [];
for(let i = 1; i <= n; i++){
    result.push(dp[input[i]].toString());
}
console.log(result.join("\n"));