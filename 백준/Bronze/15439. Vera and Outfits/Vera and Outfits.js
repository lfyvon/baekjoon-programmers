const n = Number(require('fs').readFileSync('/dev/stdin').toString());
console.log(n * (n - 1));