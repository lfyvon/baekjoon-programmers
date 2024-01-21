const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const P = input[1].split(" ").map(Number);
let maxLen = 0;
let len = 0;
for(let i = 1; i < N; i++){
    if(P[i - 1] < P[i]) len += P[i] - P[i - 1];
    else{
        maxLen = Math.max(maxLen, len);
        len = 0;
    }
}
maxLen = Math.max(maxLen, len);

console.log(maxLen);