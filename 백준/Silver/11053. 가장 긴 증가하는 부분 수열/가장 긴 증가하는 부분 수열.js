const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const cows = input[1].split(" ").map(Number);
const dp = new Array(N).fill(1);
for(let i = 0; i < N; i++){
    for(let j = 0; j < i; j++){
        if(cows[i] > cows[j]){
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}
console.log(Math.max(...dp));
