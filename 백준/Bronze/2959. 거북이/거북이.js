const [A, B, C, D] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => a - b);
console.log(Math.min(C, D) * Math.min(A, B));
