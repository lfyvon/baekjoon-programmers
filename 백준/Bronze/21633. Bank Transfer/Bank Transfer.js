const k = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let result = 25 + k * 0.01;
result < 100 ? result = 100 : result > 2000 ? result = 2000 : result;
console.log(result.toFixed(2));