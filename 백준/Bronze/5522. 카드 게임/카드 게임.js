const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => parseInt(el)).reduce((acc, cur) => acc + cur, 0);
console.log(input);