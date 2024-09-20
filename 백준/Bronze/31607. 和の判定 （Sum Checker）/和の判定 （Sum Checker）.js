const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).sort((a, b) => a - b);
console.log(A + B === C ? 1 : 0);