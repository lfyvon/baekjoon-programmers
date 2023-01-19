const [A, I] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
console.log(A * I - (A - 1));