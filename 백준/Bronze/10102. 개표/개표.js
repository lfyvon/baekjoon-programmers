const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const v = Number(input[0]);
let [a, b] = [0, 0];
for(let i = 0; i < v; i++){
    input[1][i] === 'A' ? a++ : b++;
}
console.log(a === b ? 'Tie' : a > b ? 'A' : 'B');