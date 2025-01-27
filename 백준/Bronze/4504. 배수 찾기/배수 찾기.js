const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const N = input[0];
let idx = 1;
const result = [];
while(input[idx]){
    let num = input[idx];
    result.push(`${num} ${num % N === 0 ? "is" : "is NOT"} a multiple of ${N}.`);
    idx++;
}
console.log(result.join("\n"));