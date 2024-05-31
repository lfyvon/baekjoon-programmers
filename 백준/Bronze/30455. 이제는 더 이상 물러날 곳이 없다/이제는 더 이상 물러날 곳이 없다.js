const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(N % 2 === 1 ? "Goose" : "Duck");