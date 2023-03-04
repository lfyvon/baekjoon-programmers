const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const m = Number(input[2]);
const b = input[3].split(' ').map(Number);
const set = new Set();
let result = [];

for(let i = 0; i < n; i++){
    set.add(a[i]);
}

for(let i = 0; i < m; i++){
    if(set.has(b[i])) result.push(1);
    else result.push(0);
}

console.log(result.join(' '));