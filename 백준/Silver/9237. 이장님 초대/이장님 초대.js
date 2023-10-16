const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number).sort((a, b) => b - a);
let count = 0;
for(let i = 0; i < n; i++){
    count = Math.max(count, arr[i] + i + 1);
}
console.log(count + 1);