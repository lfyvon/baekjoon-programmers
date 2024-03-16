const [H, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(H * 60 + M);