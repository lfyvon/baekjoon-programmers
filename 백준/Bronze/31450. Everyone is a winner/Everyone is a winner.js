const [M, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(M % K ? "No" : "Yes");