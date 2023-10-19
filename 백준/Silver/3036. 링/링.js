const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const ring = input[1].split(" ").map(Number);
const result = [];

const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);

for(let i = 1; i < n; i++){
    const com = gcd(ring[0], ring[i]);
    result.push(`${ring[0] / com}/${ring[i] / com}`);
}
console.log(result.join("\n"));