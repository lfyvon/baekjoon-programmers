const [k, n, m] = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);
let result = (k * n) - m;
result = result < 0 ? 0 : result;
console.log(result);