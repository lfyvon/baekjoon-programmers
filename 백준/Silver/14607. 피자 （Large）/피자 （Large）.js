const n = BigInt(require('fs').readFileSync('/dev/stdin').toString());
const result = n * (n - 1n) / 2n;
console.log(result.toString());