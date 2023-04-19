const [c, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(c / b);