const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = input.length;
let a = b = "";
for(let i = 0; i < N; i++){
    if(i < N / 2) a += input[i];
    else b += input[i];
}
console.log(a, b);