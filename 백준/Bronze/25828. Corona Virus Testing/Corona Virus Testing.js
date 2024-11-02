const [g, p, t] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const gCount = p * t + g;
const iCount = g * p;
console.log(gCount === iCount ? 0 : gCount > iCount ? 1 : 2);