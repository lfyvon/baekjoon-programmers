const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => parseInt(el));
console.log(input.reduce((a, b) => a + b, 0));