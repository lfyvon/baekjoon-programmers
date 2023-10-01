const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);
const gcd = (a, b) => a % b === 0n ? b : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);
console.log(lcm(a, b).toString());