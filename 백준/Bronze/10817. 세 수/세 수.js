const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => parseInt(el));
const result = input.sort((a, b) => a - b)[1];
console.log(result);