const [B, W] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result  = 0;
let [min, max] = [Math.min(B, W), Math.max(W, B)];
result = Math.floor(Math.sqrt(min === max ? min + max : min * 2 + 1, 2));
console.log(!result ? 'Impossible' : result);