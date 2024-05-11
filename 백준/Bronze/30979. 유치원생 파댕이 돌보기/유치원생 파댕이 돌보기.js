const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const N = Number(input[1]);
const F = input[2].split(" ").map(Number).reduce((a, b) => a + b);
console.log(`Padaeng_i ${T <= F ? "Happy" : "Cry"}`);