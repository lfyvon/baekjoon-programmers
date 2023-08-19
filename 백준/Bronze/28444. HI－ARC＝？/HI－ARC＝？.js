const [H, I, A, R, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(H * I - (A * R * C));