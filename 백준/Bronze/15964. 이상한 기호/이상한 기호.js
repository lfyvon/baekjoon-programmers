const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => parseInt(el));
const result = (a + b) * (a - b);
console.log(result);