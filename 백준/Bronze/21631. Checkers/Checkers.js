const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);
console.log(a >= b ? b.toString() : (a + 1n).toString());