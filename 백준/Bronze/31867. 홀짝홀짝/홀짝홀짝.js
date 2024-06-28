const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const K = input[1].split("").map(Number);
let even = 0;
let odd= 0;
for(let i = 0; i < N; i++){
    K[i] % 2 === 0 ? even++ : odd++;
}
console.log(even > odd ? 0 : even < odd ? 1 : -1);