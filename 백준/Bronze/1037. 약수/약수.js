const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const m = input[1].split(' ').map(Number);
console.log(Math.max(...m) * Math.min(...m));