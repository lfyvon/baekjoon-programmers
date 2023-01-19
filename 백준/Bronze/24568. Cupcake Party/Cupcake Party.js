const [r, s] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
console.log(r * 8 + 3 * s - 28);