const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const N = Number(input[0]);
let count = 0;
for(let i = 2; i <= N + 1; i++){
    if(input[i] > input[i - 1]) count++;
    if(input[i] < input[i - 1]) count--;
}
console.log(count === N - 1 ? "INCREASING" : count === -N + 1 ? "DECREASING" : "NEITHER");