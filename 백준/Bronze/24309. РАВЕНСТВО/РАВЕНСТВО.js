const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);
console.log(((b - c) / a).toString());