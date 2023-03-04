const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const a = new Set(input[1].split(' ').map(Number));
const m = Number(input[2]);
const b = input[3].split(' ').map(Number);
let result = [];

for(let i = 0; i < m; i++){
    if(a.has(b[i])) result.push(1);
    else result.push(0);
}

console.log(result.join(' '));