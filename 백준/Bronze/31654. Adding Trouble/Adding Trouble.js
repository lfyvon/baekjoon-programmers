const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(A + B === C ? "correct!" : "wrong!");
