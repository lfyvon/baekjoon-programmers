const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const result = [];
for(let i = 1; i <= n; i++){
    const [d, f, p] = input[i].split(" ").map(Number);
    result.push(`$${(d * f * p).toFixed(2)}`);
}
console.log(result.join("\n"));