const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(N <= 100000 && N % 2024 === 0 ? "Yes" : "No");