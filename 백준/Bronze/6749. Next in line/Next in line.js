const [y, m] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
console.log(2 * m - y);