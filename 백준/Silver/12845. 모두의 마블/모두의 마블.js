const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const c = input[1].split(" ").map(Number);
let maxNum = Math.max(...c);
let maxIdx = c.indexOf(maxNum);
let result = 0;
for(let i = 0; i < N; i++){
    if(i !== maxIdx) result += maxNum + c[i];
}
console.log(N === 1 ? maxNum : result);