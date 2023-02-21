const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const n = input[0];
const result = [input[n]];
for(let i = n - 1; i >= 1; i--){
    if(result[result.length - 1] < input[i]) result.push(input[i]);
}
console.log(result.length);