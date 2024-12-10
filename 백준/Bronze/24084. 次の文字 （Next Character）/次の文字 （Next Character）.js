const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const S = input[1];
let result = '';
for(let i = 1; i < N; i++){
    if(S[i] === "J") result += S[i - 1] + "\n";
}
console.log(result.trim());