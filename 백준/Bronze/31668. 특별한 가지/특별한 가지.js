const [N, M, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(M / N * K);