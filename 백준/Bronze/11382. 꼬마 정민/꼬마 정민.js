let [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => parseInt(el));

console.log(a + b + c);