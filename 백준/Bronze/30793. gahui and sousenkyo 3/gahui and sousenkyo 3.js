const [p, r] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const v = p / r;
console.log(v >= 0.6 ? "very strong" : v >= 0.4 ? "strong" : v >= 0.2 ? "normal" : "weak");
