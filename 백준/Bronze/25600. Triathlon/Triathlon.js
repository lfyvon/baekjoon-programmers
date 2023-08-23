const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let max = 0;
for(let i = 1; i <= n; i++){
    const [a, d, g] = input[i].split(" ").map(Number);
    let score = a * (d + g);
    if(a === d + g) score *= 2;
    max = Math.max(max, score);
}
console.log(max);