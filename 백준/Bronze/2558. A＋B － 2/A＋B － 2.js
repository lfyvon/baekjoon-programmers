const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => parseInt(el));
console.log(a + b);