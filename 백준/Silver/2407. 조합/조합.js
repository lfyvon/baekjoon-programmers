const [n, m]= require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const dp = Array.from(new Array(n + 1), () => new Array(n + 1).fill(0n));

for(let i = 1; i <= n; i++){
    for(let j = 0; j <= i; j++){
        if(j === 0 || j === i){
            dp[i][j] = 1n;
        } else{
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
    }
}

console.log(dp[n][m].toString());