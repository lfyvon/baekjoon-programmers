const [s, t, d] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(d / (s * 2) * t);