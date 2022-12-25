const L = parseInt(require('fs').readFileSync('/dev/stdin').toString());
const t = Math.ceil(L / 5);
console.log(t);