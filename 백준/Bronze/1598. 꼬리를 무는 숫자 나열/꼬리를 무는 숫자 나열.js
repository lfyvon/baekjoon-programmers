const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const col = Math.abs(((A - 1) % 4) - ((B - 1) % 4));
const row = Math.abs(Math.ceil(A / 4) - Math.ceil(B / 4));
console.log(col + row);