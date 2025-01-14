const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(Math.floor(N / 2) + (N % 2 === 0 ? 0 : 3));