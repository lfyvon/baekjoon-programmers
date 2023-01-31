const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const t = parseInt(input[0]);
let dp = new Array(t + 1).fill(0);
dp[1] = 1;
let result = [];

for(let i = 1; i <= t; i++){
    let countOne = fibonacci(input[i]);
    if(input[i] > 0){
        result.push(dp[input[i]-1]+" "+countOne);
    } else{
        result.push(1+" "+countOne);
    }
}

function fibonacci(n){
    if(n <= 1) {
        return n;
    } else {
        if(dp[n] > 0) {
            return dp[n];
        }
        dp[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return dp[n];
    }
}

console.log(result.join('\n'));