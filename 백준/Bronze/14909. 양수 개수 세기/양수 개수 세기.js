const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(input.filter(el => el > 0).length);