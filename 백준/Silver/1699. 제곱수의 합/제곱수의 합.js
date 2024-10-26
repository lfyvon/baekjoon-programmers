const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
const dp = Array.from({length: N + 1}, (v, i) => i);

for(let i = 1; i <= N; i++){
    for(let j = 1; j <= Math.sqrt(i); j++){
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
}
console.log(dp[N]);