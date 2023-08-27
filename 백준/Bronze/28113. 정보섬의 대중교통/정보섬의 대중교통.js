const [n, a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const sub = Math.max(n, b);
console.log(sub === a ? "Anything" : sub > a ? "Bus" : "Subway");