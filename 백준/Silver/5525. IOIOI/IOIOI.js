const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const m = Number(input[1]);
const s = input[2];
const p = "I" + "OI".repeat(n);
let count = 0;
for(let i = 0; i < m; i++){
    if(p === s.slice(i, i + p.length)) count++;
}
console.log(count);