const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const m = input[1].split(" ").map(Number);
const result = [];
for(let i = 0; i < n; i++){
    result.push(m[i] >= 300 ? 1 : m[i] >= 275 ? 2 : m[i] >= 250 ? 3 : 4);
}
console.log(result.join(" "));