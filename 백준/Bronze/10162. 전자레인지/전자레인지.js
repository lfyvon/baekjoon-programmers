const t = parseInt(require('fs').readFileSync('/dev/stdin').toString());
const a = Math.floor(t / (5 * 60));
const b = Math.floor(t % (5 * 60) / (1 * 60));
const c = Math.floor(t % (5 * 60) % (1 * 60) / 10);
let result = a + ' ' + b + ' ' + c;
if(t % 10 !== 0) result = -1;
console.log(result);