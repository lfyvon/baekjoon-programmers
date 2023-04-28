const [d, h, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const st = 11 * 24 * 60 + 11 * 60 + 11;
const et = d * 24 * 60 + h * 60 + m;
const t = et - st;
console.log(t < 0 ? -1 : t);