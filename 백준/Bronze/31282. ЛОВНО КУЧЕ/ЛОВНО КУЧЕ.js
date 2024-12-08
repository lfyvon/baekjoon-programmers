const [N, M, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Math.ceil(N / (K - M)));