const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let max = 0;
for(let i = 1; i <= n; i++){
    const [h, w] = input[i].split(" ").map(Number);
    max = Math.max(max, h * w);
}
console.log(max);