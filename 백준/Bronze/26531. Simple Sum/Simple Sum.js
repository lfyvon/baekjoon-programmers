const [a, , b, , sum] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(a + b === sum ? "YES" : "NO");