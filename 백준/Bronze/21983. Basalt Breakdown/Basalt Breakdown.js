const n = Number(require('fs').readFileSync('/dev/stdin').toString());
console.log(Math.sqrt(n * 2 / 3 / Math.sqrt(3)) * 6);