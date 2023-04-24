const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [x, y] = input[0].split(' ').map(Number);
const r = Number(input[1]);
console.log((x - r) + " " + (y - r));
console.log((x + r) + " " + (y - r));
console.log((x + r) + " " + (y + r));
console.log((x - r) + " " + (y + r));