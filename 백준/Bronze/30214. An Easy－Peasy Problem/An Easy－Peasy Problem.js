const [s1, s2] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
console.log(s1 / s2 >= 0.5 ? "E" : "H");