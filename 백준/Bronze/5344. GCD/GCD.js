const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const result = [];
for(let i = 1; i <= N; i++){
    const [A, B] = input[i].split(" ").map(Number).filter(el => el);
    result.push(gcd(Math.max(A, B), Math.min(A, B)));
}
console.log(result.join("\n"));