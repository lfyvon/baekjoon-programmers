const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const max = Math.max(...input);
console.log(input.reduce((a, b) => a + max - b, 0));