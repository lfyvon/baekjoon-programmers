const n = Number(require('fs').readFileSync('/dev/stdin').toString());
let sum = n * (n - 1) / 2;
console.log(sum + '\n' + 2);