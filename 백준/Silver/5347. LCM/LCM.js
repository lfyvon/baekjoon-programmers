const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const lmc = (a, b) => a * b / gcd(a, b);
const result = [];
for(let i = 1; i <= n; i++){
    const [a, b] = input[i].split(" ").map(Number);
    result.push(lmc(a, b));
}
console.log(result.join("\n"));