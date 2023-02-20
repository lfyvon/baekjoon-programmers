const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log((n * (n - 1) * (n - 2) * (n - 3) / 24));