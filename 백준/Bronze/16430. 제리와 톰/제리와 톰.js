const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const P = B - A;
const Q = B;
console.log(P + ' ' + Q);