const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let count = 0;
for(let i = 0; i < n; i++){
    if(i + 1 !== arr[i]) count++;
}
console.log(count);