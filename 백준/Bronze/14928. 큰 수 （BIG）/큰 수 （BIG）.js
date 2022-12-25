const N = BigInt(require('fs').readFileSync('/dev/stdin').toString());
console.log((N % 20000303n).toString());