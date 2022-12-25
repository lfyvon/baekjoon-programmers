const [n1, n2, n12] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
console.log(Math.floor((n1 + 1) * (n2 + 1) / (n12 + 1) - 1));