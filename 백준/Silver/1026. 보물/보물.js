const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);
const count = [];
let result = 0;

for(let i = 0; i < b.length; i++){
    let c = 0;
    for(let j = 0; j < b.length; j++){
        if(b[i] >= b[j]) c++;
    }
    count.push([b[i], c]);
}

a.sort((a, b) => b - a);
count.sort((a, b) => a[1] - b[1]);
for(let i = 0; i < a.length; i++){
    result += a[i] * count[i][0];
}

console.log(result);