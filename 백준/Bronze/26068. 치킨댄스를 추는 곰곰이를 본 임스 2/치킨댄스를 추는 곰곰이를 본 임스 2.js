const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let count = 0;
for(let i = 1; i <= n; i++){
    let num = Number(input[i].slice(2));
    if(num <= 90) count++;
}
console.log(count)