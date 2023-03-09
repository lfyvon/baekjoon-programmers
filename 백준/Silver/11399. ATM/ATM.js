const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = parseInt(input[0]);
const line = input[1].split(" ").map(el => parseInt(el)).sort((a, b) => a - b);
let sum = 0;
let result = 0;
for(let i = 1; i <= num; i++){
    result += sum + line[i-1];
    sum += line[i-1];
}

console.log(result);