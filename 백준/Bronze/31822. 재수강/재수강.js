const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const code = input[0].slice(0, 5);
const N = Number(input[1]);
let count = 0;
for(let i = 2; i <= N + 1; i++){
    const str = input[i].slice(0, 5);
    if(code === str) count++;
}
console.log(count);