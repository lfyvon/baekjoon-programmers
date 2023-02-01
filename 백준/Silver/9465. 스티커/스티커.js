const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
let result = [];
for(let i = 0; i < t; i++){
    const n = Number(input[i * 3 + 1]);
    const up = input[i * 3 + 2].split(' ').map(Number);
    const down = input[i * 3 + 3].split(' ').map(Number);
    const dp = Array.from(Array(2), () => Array(n + 1).fill(0));
    dp[0][1] = up[0];
    dp[1][1] = down[0];
    for(let j = 2; j <= n; j++){
        dp[0][j] = Math.max(dp[1][j - 2], dp[1][j - 1]) + up[j - 1];
        dp[1][j] = Math.max(dp[0][j - 2], dp[0][j - 1]) + down[j - 1];
    }
    result.push(Math.max(dp[0][n], dp[1][n]))
}

console.log(result.join('\n'));