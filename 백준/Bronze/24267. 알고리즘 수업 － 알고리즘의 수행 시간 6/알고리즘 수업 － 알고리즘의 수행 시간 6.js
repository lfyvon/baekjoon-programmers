const n = BigInt(require('fs').readFileSync('/dev/stdin').toString());
console.log((n * (n - 1n) * (n - 2n) / 6n).toString());
console.log(3);