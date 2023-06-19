const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const n = input[0];
const result = [];
for(let i = 1; i <= n; i++){
    result.push("=".repeat(input[i]));
}
console.log(result.join("\n"));