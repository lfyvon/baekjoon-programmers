const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const sum = input[1].split(" ").map(Number).reduce((a, b) => a + b, 0);
console.log(sum > 0 ? "Right" : sum < 0 ? "Left" : "Stay");