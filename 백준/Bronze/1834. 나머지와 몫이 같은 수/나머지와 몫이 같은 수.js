const N = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log((N * (N - 1n) * (N + 1n) / 2n).toString());