const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const price = [350.34, 230.90, 190.55, 125.30, 180.90];
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    const part = input[i].split(" ").map(Number);
    result.push(`$${part.reduce((a, b, i) => a + b * price[i], 0).toFixed(2)}`);
}
console.log(result.join("\n"));