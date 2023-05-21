const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);
console.log((n * m / 2n).toString());