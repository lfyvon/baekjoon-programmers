const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(N < 206 ? 1 : N < 218 ? 2 : N < 229 ? 3 : 4);