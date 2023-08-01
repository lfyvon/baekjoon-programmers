const [a, op, b] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.trim());
const [max, min] = [Math.max(a.length - 1, b.length -1), Math.min(a.length - 1, b.length -1)];
console.log(op === '*' ? "1" + "0".repeat(max + min) : max === min ? "2" + "0".repeat(max) : "1" + "0".repeat(max - min - 1) + "1" + "0".repeat(min));