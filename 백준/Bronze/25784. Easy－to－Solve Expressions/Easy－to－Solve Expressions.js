const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => a - b);
console.log(a + b === c ? 1 : a * b === c ? 2 : 3);
