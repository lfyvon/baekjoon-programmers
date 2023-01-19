const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const dp = new Array(n).fill(0);
dp[0] = arr[0];
for(let i = 1; i < n; i++){
    dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
}

console.log(Math.max(...dp));