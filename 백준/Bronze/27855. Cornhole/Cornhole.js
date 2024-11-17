const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [h1, b1] = input[0].split(" ").map(Number);
const [h2, b2] = input[1].split(" ").map(Number);
const p1 = h1 * 3 + b1;
const p2 = h2 * 3 + b2;
console.log((p1 === 0 && p2 === 0) || p1 === p2 ? "NO SCORE" : p1 > p2 ? `1 ${p1 - p2}` : `2 ${p2 - p1}`);