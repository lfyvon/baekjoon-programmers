const N = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);
const len = N.length;
const half = len / 2;
let left = right = 0;
for(let i = 0; i < len; i++){
    i < half ? left += N[i] : right += N[i];
}
console.log(left === right ? "LUCKY" :"READY");