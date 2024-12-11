const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
let count = 0;
for(let i = 1; i <= n; i++){
    if(input[i].split('+').length - 1 > 0) count++;
}
console.log(count);