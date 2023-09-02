const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const result = [];
for(let i = 1; i <= n; i++){
    result.push(`Case #${i}: ${input[i].trim().split(" ").reverse().join(" ")}`);
}
console.log(result.join("\n"));