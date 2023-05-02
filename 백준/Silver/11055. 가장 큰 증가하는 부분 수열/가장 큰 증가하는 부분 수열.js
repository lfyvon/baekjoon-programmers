const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const len = Number(input[0]);
const a = input[1].split(' ').map(Number);
const dp = Array.from({length : len}, () => 0);
for(let i = 0; i < len; i++){
    dp[i] = a[i];
    for(let j = 0; j < i; j++){
        if(a[j] < a[i] && dp[i] < dp[j] + a[i]){
            dp[i] = dp[j] + a[i];
        }
    }
}

console.log(Math.max(...dp));