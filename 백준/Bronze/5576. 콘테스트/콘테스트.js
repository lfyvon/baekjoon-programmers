const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const w = input.slice(0, 10).sort((a, b) => b - a);
const k = input.slice(10).sort((a, b) => b - a);
console.log(`${w[0] + w[1] + w[2]} ${k[0] + k[1] + k[2]}`);