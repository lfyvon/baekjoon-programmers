let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = Math.floor(A / B).toString();
if(A % B) result += ".";
for(let i = 0; i < 1000; i++){
    if(A % B === 0) break;
    A = A % B * 10;
    result += Math.floor(A / B).toString();
}
console.log(result);