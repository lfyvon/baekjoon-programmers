const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);
let result = [];
for(let i = 1; i <= t; i++){
    const [a, b] = input[i].split(' ').map(Number);
    result.push(lcm(a, b) + ' ' + gcd(a, b));
}
console.log(result.join('\n'));