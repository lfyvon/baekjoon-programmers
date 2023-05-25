const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const s = Number(input[0]);
const str = input[1];
const v = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
for(let i = 0; i < s; i++){
    if(v.includes(str[i])) count++;
}
console.log(count);