const [n, m, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => parseInt(el));

let row = parseInt(k / m);
let col = k % m;

console.log(row, col);