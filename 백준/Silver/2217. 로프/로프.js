const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const n = input[0];
const rope = input.slice(1).sort((a, b) => b - a);
let min = rope[0];
for(let i = 1; i < n; i++){
    min = Math.max(min, rope[i] * (i + 1));
}
console.log(min);