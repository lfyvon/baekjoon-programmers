const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const M = input[1].trim();
const K = Number(input[2]);
let result = "";
if(M === "annyong") result = K % 2 === 1 ? K : K - 1;
else {
    result = K % 2 === 1 ? K - 1 : K;
    if (K === 1)  result = 2;
}
console.log(result);