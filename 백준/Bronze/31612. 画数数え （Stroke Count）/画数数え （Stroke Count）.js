const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const S = input[1];
let count = 0;
for(let i = 0; i < N; i++){
    count += S[i] === "o" ? 1 : 2;
}
console.log(count);