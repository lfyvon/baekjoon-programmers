const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log((24 - a + b) % 24);