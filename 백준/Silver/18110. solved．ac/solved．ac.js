const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const cut = Math.round(n * 0.15);
console.log(n === 0 ? 0 : Math.round(input.sort((a, b) => a - b).slice(cut, n - cut).reduce((a, b) => a + b, 0) / (n - cut * 2)));