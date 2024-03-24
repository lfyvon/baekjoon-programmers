const X = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(X % 7 === 2 ? 1 : 0);