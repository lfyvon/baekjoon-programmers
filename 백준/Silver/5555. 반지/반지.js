const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const str = input[0];
const n = Number(input[1]);
let result = 0;
for(let i = 2; i < n + 2; i++){
    const ring = input[i] + input[i];
    if(ring.split(str).length - 1) result++;
}
console.log(result);