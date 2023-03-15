const [s, n] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
console.log(s[Number(n) - 1]);