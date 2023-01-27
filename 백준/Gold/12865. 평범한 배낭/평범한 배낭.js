const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));
const [n, k] = input[0];
const dp = Array.from(new Array(n + 1), () => new Array(k + 1).fill(0));

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= k; j++){
        if(input[i][0] <= j){
            dp[i][j] = Math.max(input[i][1] + dp[i - 1][j - input[i][0]], dp[i - 1][j]);
        } else{
            dp[i][j] = dp[i - 1][j];
        }
    }
}

console.log(dp[n][k]);