const [a, b] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(BigInt);
let result = a + b;
console.log(result.toString());