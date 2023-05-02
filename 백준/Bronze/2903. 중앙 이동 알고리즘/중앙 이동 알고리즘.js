const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log((2 ** n + 1) ** 2);