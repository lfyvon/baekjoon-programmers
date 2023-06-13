const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const q = input[1].split(" ").map(Number);
let score = 0;
let result = 0;
for(let i = 0; i < n; i++){
    score = q[i] === 1 ? score + 1 : 0;
    result += score;
}
console.log(result);