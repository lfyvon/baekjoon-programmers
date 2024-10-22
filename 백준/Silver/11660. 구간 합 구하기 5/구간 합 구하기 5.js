const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [N, M] = input[0];
const table = input.slice(1, N + 1);
const dp = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));
const result = [];

for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      dp[i][j] = table[i - 1][j - 1] + dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - 1];
    }
}
for (let i = N + 1; i <= N + M; i++) {
    const [x1, y1, x2, y2] = input[i];
    result.push(dp[x2][y2] - (dp[x1 - 1][y2] + dp[x2][y1 - 1]) + dp[x1 - 1][y1 - 1]);
}
console.log(result.join("\n"));