const [x, y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const a = 100 - x;
const b = 100 - y;
const c = 100 - (a + b);
const d = a * b;
const q = Math.floor(d / 100);
const r = d % 100;
console.log(`${a} ${b} ${c} ${d} ${q} ${r}`);
console.log(`${c + q} ${r}`);