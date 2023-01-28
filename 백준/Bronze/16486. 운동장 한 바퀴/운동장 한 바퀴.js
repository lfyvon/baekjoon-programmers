const [d1, d2] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
const pi = 3.141592;
console.log((d1 + d2 * pi) * 2);