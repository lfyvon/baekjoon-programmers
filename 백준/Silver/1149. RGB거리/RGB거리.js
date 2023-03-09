let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = parseInt(input[0]);
const arr = input.slice(1).map(el => el.split(' ').map(v => parseInt(v)));
let dp = [...new Array(num + 1)].map(v => new Array(3).fill(0));
dp[1] = arr[0];

for(let i = 2; i <= num; i++){
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i - 1][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i - 1][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i - 1][2];
}

console.log(Math.min(...dp[num]));