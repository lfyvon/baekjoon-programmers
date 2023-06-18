const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const n = input[0];
let result = 0;
for(let i = 1; i <= n; i++){
    result += input[i];
}
console.log(result);