let [a, b] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => BigInt(el));
console.log(String(a + b));