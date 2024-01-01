const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Math.floor((A + B) * (Math.abs(B - A) + 1) / 2));