const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < n; i++){
    result.push(`${input[i]} is ${input[i] % 2 === 0 ? "even" : "odd"}`);
}
console.log(result.join("\n"));