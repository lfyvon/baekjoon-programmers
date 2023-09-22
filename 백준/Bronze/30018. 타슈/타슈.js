const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);
let result = 0;
for(let i = 0; i < n; i++){
    result += Math.abs(a[i] - b[i]);
}

console.log(result / 2);