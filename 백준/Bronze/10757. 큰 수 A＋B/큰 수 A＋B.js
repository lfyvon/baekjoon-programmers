const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => BigInt(el));
console.log((a + b).toString());