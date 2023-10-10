const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const result = [];
for(let i = 1; i <= n; i++){
    const [A, B, X] = input[i].split(" ").map(Number);
    result.push(A * (X - 1) + B);
}
console.log(result.join("\n"));