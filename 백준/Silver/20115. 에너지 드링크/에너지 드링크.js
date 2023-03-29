const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const x = input[1].split(' ').map(Number);
const max = Math.max(...x);
console.log((x.reduce((a, b) => a + b, 0) - max) / 2 + max);