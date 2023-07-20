const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const result = [];
const n = Number(input[0]);
for(let i = 1; i <= n; i++){
    result.push(input[i].split(" ").map(Number).sort((a, b) => b - a)[2]);
}
console.log(result.join("\n"));