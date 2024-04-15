const [w1, h1, w2, h2] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log((h1 + h2) * 2 + Math.max(w1, w2) * 2 + 4);