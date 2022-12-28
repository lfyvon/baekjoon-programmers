const n = parseInt(require('fs').readFileSync('/dev/stdin').toString());
const dp = new Array(n + 1).fill(0);
dp[1] = 1
dp[3] = 1
dp[4] = 1
for(let i = 5; i <= n; i++){
    if(!dp[i - 1] || !dp[i - 3] || !dp[i - 4]) dp[i] = 1;
}
if(!dp[n]) console.log('CY');
else console.log('SK');