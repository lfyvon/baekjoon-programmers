const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const max = 490;
const dp = Array(max + 1).fill(0n);
let result = '';
dp[1] = 1n;
for(let i = 2; i <= max; i++){
    dp[i] = dp[i - 1] + dp[i - 2];
}

let i = 0;
while(true){
    const num = input[i];
    if(num === -1) break;
    result += `Hour ${num}: ${dp[num].toString()} cow(s) affected\n`;
    i++;
}

console.log(result.trim());