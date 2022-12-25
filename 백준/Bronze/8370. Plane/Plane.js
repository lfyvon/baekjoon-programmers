const [n1, n2, k1, k2] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
console.log(n1 * n2 + k1 * k2);