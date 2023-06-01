const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const n = input[0];
let result = input[1];
for(let i = 2; i <= n; i++){
    result += input[i] - 1;
}
console.log(result);