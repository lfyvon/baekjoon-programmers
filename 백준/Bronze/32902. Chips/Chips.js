const [k, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(`${n + 1} ${k * n + 1}`);