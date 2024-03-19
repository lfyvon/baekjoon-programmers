const [c4, a3, a4] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const e = 229 * 324 * c4 * 2;
const p = 297 * 420 * a3 * 2;
const s = 210 * 297 * a4;
console.log((e + p + s) * 0.000001);