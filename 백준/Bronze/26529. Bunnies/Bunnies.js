const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const n = input[0];
const max = 490;
const dp = Array(max + 1).fill(0n);
let result = '';
dp[1] = 1n;
for(let i = 2; i <= max; i++){
    dp[i] = dp[i - 1] + dp[i - 2];
}

for(let i = 1; i <= n; i++){
    result += dp[input[i] + 1].toString() + '\n';
}
console.log(result.trim());