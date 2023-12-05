const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
let result;
for(let i = 1; i <= N; i++){
    if(input[i].includes("S")) result = input[i].trim();
}
console.log(result);