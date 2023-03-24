const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [a1, a0] = input[0].split(' ').map(Number);
const c = Number(input[1]);
const n = Number(input[2]);
console.log((a1 * n + a0 <= c * n) && (a1 <= c) ? 1 : 0) ;