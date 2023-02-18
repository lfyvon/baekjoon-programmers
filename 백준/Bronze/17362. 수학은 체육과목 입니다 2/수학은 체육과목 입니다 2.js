const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const r = n % 8;
console.log(r === 1 ? 1 : r === 2 || r === 0 ? 2 : r === 3 || r === 7 ? 3 : r === 4 || r === 6 ? 4 : 5);