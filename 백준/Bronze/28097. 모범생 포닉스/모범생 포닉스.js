const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const t = input[1].split(" ").map(Number).reduce((a, b) => a + b, 0) + (n - 1) * 8;
console.log(`${Math.floor(t / 24)} ${t % 24}`);