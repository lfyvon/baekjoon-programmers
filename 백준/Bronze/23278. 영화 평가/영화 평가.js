const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, L, H] = input[0].split(" ").map(Number);
const scores = input[1].split(" ").map(Number).sort((a, b) => a - b);
console.log(scores.slice(L, N - H).reduce((a, b) => a + b, 0) / (N - L - H));