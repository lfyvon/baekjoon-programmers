const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.trim());
console.log(input.join(""));