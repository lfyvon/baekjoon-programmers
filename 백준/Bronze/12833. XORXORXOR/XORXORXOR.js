const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(C % 2 === 0 ? A : A ^ B);