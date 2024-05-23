const [M, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(M > N ? N * 2 - 1 : M * 2 - 2);