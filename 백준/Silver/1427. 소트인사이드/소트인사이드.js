const n = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);
let result = n.sort((a, b) => b - a);
console.log(result.join(''));