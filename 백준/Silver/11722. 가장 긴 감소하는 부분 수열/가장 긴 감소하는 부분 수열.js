const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const len = Number(input[0]);
const a = input[1].split(' ').map(Number);
const dp = Array.from({length : len}, () => 0);
for(let i = 0; i < len; i++){
    let max = 0;
    for(let j = 0; j < i; j++){
        if(a[i] < a[j] && max < dp[j]){
            max = dp[j];
        }
    }
    dp[i] = max + 1;
}
console.log(Math.max(...dp));