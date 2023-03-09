let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = parseInt(input[0]);
let dp = new Array(n+1).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
let result = [];

for(let i = 1; i <= n; i++){
    result.push(addCase(input[i]));
}

function addCase(n){
    if(n <= 2) {
        return n;
    } else {
        if(dp[n] > 0) {
            return dp[n];
        }
        dp[n] = addCase(n - 1) + addCase(n - 2) + addCase(n - 3);
        return dp[n];
    }
}

console.log(result.join('\n'));