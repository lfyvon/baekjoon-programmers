const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [A1, B1] = input[0].split(" ").map(Number);
const [A2, B2] = input[1].split(" ").map(Number);
const n = A1 * B2 + A2 * B1;
const d = B1 * B2;
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const gcdRes = gcd(n, d);
console.log(n / gcdRes, d /gcdRes);