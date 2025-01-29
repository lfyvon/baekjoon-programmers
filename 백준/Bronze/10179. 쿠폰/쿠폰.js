const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    result.push(`$${(Number(input[i]) * 0.8).toFixed(2)}`);
}
console.log(result.join("\n"));