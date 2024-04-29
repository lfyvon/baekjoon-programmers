const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    const [a, b] = input[i].split(" ").map(Number);
    result.push(`The height of the triangle is ${(a * 2 / b).toFixed(2)} units`);
}
console.log(result.join("\n"));