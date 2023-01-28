const a = Number(require('fs').readFileSync('/dev/stdin').toString());
console.log(4 * Math.sqrt(a));