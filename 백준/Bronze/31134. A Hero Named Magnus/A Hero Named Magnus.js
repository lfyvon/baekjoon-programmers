const [T, ... arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < T; i++){
    result.push(arr[i] * 2 - 1);
}
console.log(result.join("\n"));