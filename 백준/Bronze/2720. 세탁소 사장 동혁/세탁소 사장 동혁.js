const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const t = input[0];
const change = [25, 10, 5, 1];
let result = [];
for(let i = 1; i <= t; i++){
    let count = [];
    for(let j = 0; j < change.length; j++){
        count.push(Math.floor(input[i] / change[j]));
        input[i] = input[i] % change[j];
    }
    result.push(count.join(' '));
}
console.log(result.join('\n'));