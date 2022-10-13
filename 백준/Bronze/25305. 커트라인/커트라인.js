const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(el => parseInt(el));
let x = input[1].split(' ').map(el => parseInt(el)).sort((a, b) => b - a);

console.log(x[k - 1]);