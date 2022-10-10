const n = parseInt(require('fs').readFileSync('/dev/stdin').toString());
let result = ((1 + n) * n) / 2;
console.log(result);