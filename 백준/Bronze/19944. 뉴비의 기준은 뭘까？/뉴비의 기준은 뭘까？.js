const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(m < 3 ? "NEWBIE!" : m <= n ? "OLDBIE!" : "TLE!");