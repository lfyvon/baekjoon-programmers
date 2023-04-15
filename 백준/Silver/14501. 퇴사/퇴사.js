const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const dp = Array.from({length: n + 1}, () => 0);
for(let i = 1; i <= n; i++){
    const [t, p] = input[i].split(' ').map(Number);
    if(i + t > n + 1) continue;
    dp[i] += p;
    for(let j = i + t; j <= n; j++){
        dp[j] = Math.max(dp[i], dp[j]);
    }
}
console.log(Math.max(...dp));