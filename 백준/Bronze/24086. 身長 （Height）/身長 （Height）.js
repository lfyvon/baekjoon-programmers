const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
console.log(B - A);