const [H, W] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(Math.min(H, W) * 50);