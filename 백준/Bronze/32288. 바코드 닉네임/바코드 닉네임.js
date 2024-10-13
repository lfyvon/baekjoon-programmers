const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const S = input[1].split("");
const result = [];
for(let i = 0; i < N; i++){
    result.push(S[i] === S[i].toLowerCase() ? S[i].toUpperCase() : S[i].toLowerCase());
}
console.log(result.join(""));