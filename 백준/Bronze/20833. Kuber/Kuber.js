const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const sum = n * (n + 1) / 2;
console.log(sum * sum);