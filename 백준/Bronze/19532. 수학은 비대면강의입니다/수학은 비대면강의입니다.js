const [a, b, c, d, e, f] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const x = (c * e - b * f) / (a * e - b * d);
const y = (c * d - a * f) / (b * d - a * e);
console.log(`${x} ${y}`);