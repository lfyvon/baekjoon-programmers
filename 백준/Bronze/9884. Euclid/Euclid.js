const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => a - b);
const gcd = (a, b) => {return a % b === 0 ? b : gcd(b, a % b)};
console.log(gcd(a, b));