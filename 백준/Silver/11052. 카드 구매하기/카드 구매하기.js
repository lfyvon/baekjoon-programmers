const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const p = input[1].split(' ').map(Number);
const dp = Array.from({length:n + 1}, () => 0);
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        dp[i] = Math.max(dp[i], dp[i - j] + p[j - 1]);
    }
}
console.log(dp[n])