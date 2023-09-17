const [w, h] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log((w * h / 2).toFixed(1));