const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(el => parseInt(el));
const v = parseInt(input[2]);
let count = 0;

for(let i = 0; i < n; i++){
    if(arr[i] === v) count++;
}

console.log(count);