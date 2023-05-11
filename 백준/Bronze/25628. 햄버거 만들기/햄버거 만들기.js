const [p, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(Math.min(Math.floor(p / 2), b));