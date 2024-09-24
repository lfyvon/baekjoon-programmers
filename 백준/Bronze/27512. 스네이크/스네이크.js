const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const mul = N * M;
console.log(mul % 2 === 1 ? mul - 1 : mul);