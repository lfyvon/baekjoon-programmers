const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(1 << n);