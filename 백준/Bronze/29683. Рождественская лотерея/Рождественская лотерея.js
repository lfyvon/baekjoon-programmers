const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, A] = input[0].split(" ").map(Number);
const sum = input[1].split(" ").map(Number).reduce((a, b) => a + Math.floor(b / A), 0);
console.log(sum);