const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number).reduce((a, b) => a + Math.ceil(b / 2), 0);
console.log(N <= A ? "YES" : "NO");