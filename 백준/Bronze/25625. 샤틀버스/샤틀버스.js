const [x, y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(x > y ? x + y : y - x);