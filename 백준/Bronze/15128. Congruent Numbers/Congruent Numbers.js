const [p1, q1, p2, q2] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Number.isInteger(p1 * p2 / q1 / q2 / 2) ? 1 : 0)