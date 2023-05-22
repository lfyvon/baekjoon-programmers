const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const tee = input[1].split(' ').map(Number);
let count = 0;
for(let i = 0; i < 5; i++){
    if(tee[i] === n) count++;
}
console.log(count);