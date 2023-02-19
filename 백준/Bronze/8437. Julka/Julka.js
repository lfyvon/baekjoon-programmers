const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);
console.log(((a + b) / 2n).toString());
console.log(((a - b) / 2n).toString());