const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => BigInt(el));
let result = [a + b, a - b, a * b];
console.log(result.join("\n"));