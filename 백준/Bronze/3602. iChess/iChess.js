const [B, W] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let [min, max] = [Math.min(B, W), Math.max(W, B)];
let result = Math.floor(Math.sqrt(min === max ? min + max : min * 2 + 1, 2));
console.log(!result ? 'Impossible' : result);