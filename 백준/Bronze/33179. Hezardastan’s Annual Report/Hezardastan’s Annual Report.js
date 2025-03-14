const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let result = 0;
for(let i = 0; i < N; i++){
    result += Math.ceil(arr[i] / 2);
}
console.log(result);