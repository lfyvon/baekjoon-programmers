const s = require('fs').readFileSync('/dev/stdin').toString().trim();
const v = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
for(let i = 0; i < s.length; i++){
    if(v.includes(s[i])) count++;
}
console.log(count)