const n = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log((BigInt("0b" + n) * 17n).toString(2));