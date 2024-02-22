const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);
const [K, X] = input[1].split(" ").map(Number);
const f = Math.min(K + X, B) - Math.max(K - X, A) + 1;
console.log(f <= 0 ? "IMPOSSIBLE" : f);