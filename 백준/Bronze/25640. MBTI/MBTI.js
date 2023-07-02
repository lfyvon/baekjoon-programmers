const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.trim());
const jinho = input[0];
const n = Number(input[1]);
let result = 0;
for(let i = 2; i < n + 2; i++){
    if(input[i] === jinho) result++;
}
console.log(result);