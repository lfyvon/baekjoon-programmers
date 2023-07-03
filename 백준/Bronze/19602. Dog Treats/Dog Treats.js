const [s, m, l] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(s * 1 + m * 2 + l * 3 >= 10 ? "happy" : "sad");