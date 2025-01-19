const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(" ").map(Number);
const coinList = input.slice(1).map(Number).sort((a, b) => a- b);
const dp = new Array(10001).fill(Infinity);
dp[0] = 0;
for(let i = 0; i < n; i++){
    coin = coinList[i];
    for(let j = coin; j <= k; j++){
        dp[j] = Math.min(dp[j], dp[j - coin] + 1);
    }
}
console.log(dp[k] === Infinity ? - 1 : dp[k]);