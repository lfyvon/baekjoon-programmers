const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('-').map(el => el = el[0]);
console.log(input.join(''))