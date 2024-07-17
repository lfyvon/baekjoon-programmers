const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number).sort((a, b) => b - a);
let result = 0;
for(let i = 0; i < Math.floor(N / 2); i++){
    result += arr[i];
}
console.log(result);