const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => el.split("").map(Number));
const len = B ? B.length : 0;
const sumA = A.reduce((a, b) => a + b, 0);
let result = 0;
for(let i = 0; i < len; i++){
    result += sumA * B[i];
}
console.log(result);