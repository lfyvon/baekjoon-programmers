const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input[0].trim().split('').map(Number);
const m = input[1];
let sum = 0;
let idx = 0;
let check = 0;
for(let i = 0; i < m.length; i++){
    let len = m[i].toLowerCase().charCodeAt() - 96;
    if(m[i] === m[i].toLowerCase()){
        for(let j = idx; j < Math.min(idx + len, n.length); j++){
            sum += n[j];
        }
    } 
    idx += len;
}
console.log(idx === n.length ? sum : "non sequitur");
