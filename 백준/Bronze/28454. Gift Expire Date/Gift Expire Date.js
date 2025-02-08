const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const now = input[0].split("-").join("");
const N = Number(input[1]);
let result = 0;
for(let i = 2; i <= N + 1; i++){
    const c = input[i].split("-").join("");
    if(now <= c) result++;
}
console.log(result);