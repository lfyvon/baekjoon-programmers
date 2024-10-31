const [n, ...d] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(d.filter(el => el % 2 === 1).length);
