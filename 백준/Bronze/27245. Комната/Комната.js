const [w, l, h] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const max = Math.max(w, l);
const min = Math.min(w, l);
console.log(min >= 2 * h && max <= 2 * min ? "good" : "bad");