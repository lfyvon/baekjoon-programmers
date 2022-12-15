const [r1, s] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => parseInt(el));
console.log(s * 2 - r1);