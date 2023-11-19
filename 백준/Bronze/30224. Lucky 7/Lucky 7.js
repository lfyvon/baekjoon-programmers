const n = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(n.includes('7') ? +n % 7 === 0 ? 3 : 2 : +n % 7 === 0 ? 1 : 0);