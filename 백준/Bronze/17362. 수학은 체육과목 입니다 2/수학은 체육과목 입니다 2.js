const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const result = n % 8;
console.log(result === 1 ? 1 : result === 2 || result === 0 ? 2 : result === 3 || result === 7 ? 3 : result === 4 || result === 6 ? 4 : 5);