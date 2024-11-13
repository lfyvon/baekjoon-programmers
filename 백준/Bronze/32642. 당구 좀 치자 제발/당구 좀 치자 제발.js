const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let count = 0;
let sum = 0;
for(let i = 0; i < N; i++){
    if(arr[i] === 0) count--;
    else count++;
    sum += count;
}
console.log(sum);