const [R, C, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Math.ceil(R / N) * Math.ceil(C / N));