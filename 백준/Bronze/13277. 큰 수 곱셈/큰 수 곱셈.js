const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);
console.log((A * B).toString());