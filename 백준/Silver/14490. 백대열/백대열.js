const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(':').map(Number);
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const com = gcd(Math.max(n, m) , Math.min(n, m));
console.log(n / com  + ":" + m / com);