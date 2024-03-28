const input = require('fs').readFileSync('/dev/stdin'
).toString().trim().split('\n');
const N = Number(input[0]);
let result = 0;
for(let i = 1; i <= N; i++){
    if(input[i].includes("01") || input[i].includes("OI")) result++;   
}
console.log(result);